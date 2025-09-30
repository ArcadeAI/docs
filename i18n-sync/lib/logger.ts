import pc from "picocolors";
import { FOOTER_WIDTH, HEADER_WIDTH, PROGRESS_BAR_WIDTH } from "./constants";

/**
 * Enhanced logging system with different levels and formatting
 */
export class Logger {
  private silent = false;
  private verbose = false;

  setSilent(silent: boolean): void {
    this.silent = silent;
  }

  setVerbose(verbose: boolean): void {
    this.verbose = verbose;
  }

  info(message: string): void {
    if (!this.silent) {
      process.stdout.write(`${message}\n`);
    }
  }

  debug(message: string): void {
    if (this.verbose && !this.silent) {
      process.stdout.write(`${pc.dim(`[DEBUG] ${message}`)}\n`);
    }
  }

  error(message: string): void {
    if (!this.silent) {
      process.stderr.write(`${pc.red(`[ERROR] ${message}`)}\n`);
    }
  }

  warn(message: string): void {
    if (!this.silent) {
      process.stdout.write(`${pc.yellow(`[WARN] ${message}`)}\n`);
    }
  }

  // Formatting helpers
  formatHeader(text: string): string {
    const padding = "═".repeat(Math.max(0, HEADER_WIDTH - text.length));
    return pc.bold(pc.cyan(`╭─ ${text} ${padding}`));
  }

  formatSubHeader(icon: string, label: string, value: string | number): string {
    return `${pc.dim("│")} ${icon} ${pc.dim(label)} ${pc.bold(pc.white(String(value)))}`;
  }

  formatSuccess(icon: string, message: string): string {
    return `${pc.dim("│")} ${icon} ${pc.green(message)}`;
  }

  formatFooter(): string {
    return pc.dim(`╰${"─".repeat(FOOTER_WIDTH)}`);
  }

  makeProgressBar(done: number, total: number, eta?: string): string {
    if (total === 0) {
      return `${pc.dim("[")}${pc.dim(".".repeat(PROGRESS_BAR_WIDTH))}${pc.dim("]")} ${pc.yellow("0/0")}`;
    }

    const percentageMultiplier = 100;
    const percentage = Math.round((done / total) * percentageMultiplier);
    const completed = Math.max(
      0,
      Math.min(
        PROGRESS_BAR_WIDTH,
        Math.round((done / total) * PROGRESS_BAR_WIDTH)
      )
    );

    const filled = pc.bgGreen(pc.white("█".repeat(completed)));
    const empty = pc.dim("░".repeat(PROGRESS_BAR_WIDTH - completed));

    const base = `${pc.dim("[")}${filled}${empty}${pc.dim("]")} ${pc.bold(pc.cyan(`${percentage}%`))} ${pc.dim("(")}${pc.yellow(String(done))}${pc.dim("/")}${pc.yellow(String(total))}${pc.dim(")")}`;

    return eta ? `${base} ${pc.dim(`ETA: ${eta}`)}` : base;
  }
}

// Global logger instance
export const logger = new Logger();
