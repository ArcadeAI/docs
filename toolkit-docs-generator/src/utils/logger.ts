/**
 * Logging utility for CLI progress reporting
 */

import chalk from "chalk";

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface Logger {
  readonly debug: (message: string, context?: Record<string, unknown>) => void;
  readonly info: (message: string, context?: Record<string, unknown>) => void;
  readonly warn: (message: string, context?: Record<string, unknown>) => void;
  readonly error: (message: string, context?: Record<string, unknown>) => void;
  readonly progress: (current: number, total: number, message: string) => void;
  readonly success: (message: string) => void;
  readonly startGroup: (name: string) => void;
  readonly endGroup: () => void;
}

export interface LoggerOptions {
  /** Minimum log level (default: "info") */
  readonly level?: LogLevel;
  /** Whether to use colors (default: true) */
  readonly colors?: boolean;
  /** Whether to show timestamps (default: false) */
  readonly timestamps?: boolean;
}

const LOG_LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const LOG_LEVEL_ICONS: Record<LogLevel, string> = {
  debug: "🔍",
  info: "ℹ️ ",
  warn: "⚠️ ",
  error: "❌",
};

const formatTimestamp = (): string => {
  const now = new Date();
  return `[${now.toISOString().slice(11, 19)}]`;
};

const formatContext = (context?: Record<string, unknown>): string => {
  if (!context || Object.keys(context).length === 0) {
    return "";
  }
  return ` ${chalk.dim(JSON.stringify(context))}`;
};

export const createLogger = (options?: LoggerOptions): Logger => {
  const level = options?.level ?? "info";
  const useColors = options?.colors ?? true;
  const showTimestamps = options?.timestamps ?? false;

  const shouldLog = (messageLevel: LogLevel): boolean =>
    LOG_LEVEL_ORDER[messageLevel] >= LOG_LEVEL_ORDER[level];

  const formatMessage = (
    lvl: LogLevel,
    message: string,
    context?: Record<string, unknown>
  ): string => {
    const parts: string[] = [];

    if (showTimestamps) {
      parts.push(useColors ? chalk.dim(formatTimestamp()) : formatTimestamp());
    }

    parts.push(LOG_LEVEL_ICONS[lvl]);

    let coloredMessage = message;
    if (useColors) {
      switch (lvl) {
        case "debug":
          coloredMessage = chalk.gray(message);
          break;
        case "info":
          coloredMessage = message;
          break;
        case "warn":
          coloredMessage = chalk.yellow(message);
          break;
        case "error":
          coloredMessage = chalk.red(message);
          break;
      }
    }

    parts.push(coloredMessage);
    parts.push(formatContext(context));

    return parts.join(" ");
  };

  const log = (
    lvl: LogLevel,
    message: string,
    context?: Record<string, unknown>
  ): void => {
    if (!shouldLog(lvl)) {
      return;
    }
    console.log(formatMessage(lvl, message, context));
  };

  return {
    debug: (message, context) => log("debug", message, context),
    info: (message, context) => log("info", message, context),
    warn: (message, context) => log("warn", message, context),
    error: (message, context) => log("error", message, context),

    progress: (current, total, message) => {
      if (!shouldLog("info")) {
        return;
      }
      const percent = Math.round((current / total) * 100);
      const bar =
        "█".repeat(Math.floor(percent / 5)) +
        "░".repeat(20 - Math.floor(percent / 5));
      const prefix = useColors
        ? chalk.cyan(`[${bar}] ${percent}%`)
        : `[${bar}] ${percent}%`;
      console.log(`${prefix} ${message} (${current}/${total})`);
    },

    success: (message) => {
      if (!shouldLog("info")) {
        return;
      }
      const formatted = useColors
        ? chalk.green(`✓ ${message}`)
        : `✓ ${message}`;
      console.log(formatted);
    },

    startGroup: (name) => {
      if (!shouldLog("info")) {
        return;
      }
      const formatted = useColors
        ? chalk.bold.cyan(`\n▶ ${name}`)
        : `\n▶ ${name}`;
      console.log(formatted);
    },

    endGroup: () => {
      // Optional visual separator
    },
  };
};

/**
 * Default logger instance
 */
export const defaultLogger = createLogger();
