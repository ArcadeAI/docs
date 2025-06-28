import chalk from "chalk";
import ora, { type Ora } from "ora";

import type { Config } from "./config";

export enum LogLevel {
  DEBUG = "debug", // eslint-disable-line no-unused-vars
  INFO = "info", // eslint-disable-line no-unused-vars
  WARN = "warn", // eslint-disable-line no-unused-vars
  ERROR = "error", // eslint-disable-line no-unused-vars
}

export class Logger {
  private level: LogLevel;
  private color: boolean;
  private includeTimestamps: boolean;
  private spanStartTime: number | undefined = undefined;
  private spinner: Ora | undefined = undefined;
  private toolCallCount: number = 0;
  private updateInterval: NodeJS.Timeout | undefined = undefined;

  constructor(config: Config) {
    this.includeTimestamps = config.log_timestamps;
    this.level = config.log_level;
    this.color = config.log_color;
  }

  private getTimestamp() {
    const timestamp = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return this.includeTimestamps
      ? this.color
        ? chalk.gray(`[${timestamp}]`)
        : `[${timestamp}]`
      : "";
  }

  private getSpanMarker() {
    return this.spanStartTime !== undefined ? " ├─" : "";
  }

  private getDuration() {
    return Math.round((Date.now() - (this.spanStartTime ?? Date.now())) / 1000);
  }

  private getToolCallStats() {
    const duration = this.getDuration();
    const toolCallText = `  🕝 duration: ${duration}s | 🛠️ tool calls: ${this.toolCallCount}`;
    return this.color ? chalk.dim(toolCallText) : toolCallText;
  }

  private formatMessage(message: string, color: (text: string) => string) {
    return this.color ? color(message) : message;
  }

  private logToConsole(
    message: string,
    level: LogLevel,
    color: (text: string) => string,
  ) {
    const shouldSkip =
      (this.level === LogLevel.ERROR && level !== LogLevel.ERROR) ||
      (this.level === LogLevel.WARN &&
        (level === LogLevel.INFO || level === LogLevel.DEBUG)) ||
      (this.level === LogLevel.INFO && level === LogLevel.DEBUG);
    if (shouldSkip) return;

    const timestamp = this.getTimestamp();
    const spanMarker = this.getSpanMarker();
    const formattedMessage = this.formatMessage(message, color);
    const output = `${timestamp}${spanMarker} ${formattedMessage}`;

    if (level === LogLevel.ERROR || level === LogLevel.WARN) {
      console.error(output);
    } else if (level === LogLevel.DEBUG) {
      console.debug(output);
    } else {
      console.log(output);
    }
  }

  info(message: string) {
    this.logToConsole(message, LogLevel.INFO, chalk.white);
  }

  warn(message: string) {
    this.logToConsole(message, LogLevel.WARN, chalk.yellow);
  }

  error(message: string) {
    this.logToConsole(message, LogLevel.ERROR, chalk.red);
  }

  debug(message: string) {
    this.logToConsole(message, LogLevel.DEBUG, chalk.gray);
  }

  incrementToolCalls() {
    this.toolCallCount++;
    this.updateSpanDisplay();
  }

  private updateSpanDisplay() {
    if (!this.spinner) return;
    const mainMessage = this.spinner.text.split("\n")[0];
    this.spinner.text = `${mainMessage}\n${this.getToolCallStats()}`;
  }

  startSpan(message: string) {
    this.info(message);
    this.spanStartTime = Date.now();
    this.toolCallCount = 0;
    this.spinner = ora(this.formatMessage(message, chalk.cyan)).start();

    this.updateInterval = setInterval(() => this.updateSpanDisplay(), 1000);
  }

  updateSpan(message: string, emoji: string) {
    if (!this.spinner) return;

    const originalText = this.spinner.text;
    const timestamp = this.getTimestamp();
    const spanMarker = this.getSpanMarker();
    const formattedMessage = this.formatMessage(message, chalk.white);

    this.spinner.stopAndPersist({
      text: formattedMessage,
      symbol: `${timestamp}${spanMarker} ${emoji}`,
    });

    this.spinner.start(this.formatMessage(originalText, chalk.cyan));
    this.updateSpanDisplay();
  }

  endSpan(message: string = "Completed with no output") {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = undefined;
    }

    const doneMessage = "Done!";
    const timestamp = this.getTimestamp();
    const duration = this.getDuration();

    this.spinner?.stopAndPersist({
      text: this.formatMessage(`${doneMessage} (${duration}s)`, chalk.cyan),
      symbol: `${timestamp} ✅`,
    });

    this.spinner = undefined;
    this.spanStartTime = undefined;
    this.toolCallCount = 0;

    this.info(`\r\n${message}\r\n`);
  }
}
