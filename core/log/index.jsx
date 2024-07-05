import config from "@/config";
import chalk from "chalk";

// Alias for console.log
const log = console.log;

/**
 * Show logs based on environment.
 * @param {Array} data - The data to be logged.
 * @returns {Array|undefined} The formatted log data or undefined.
 */
const showLogs = (data) => {
  if (process.env.NEXT_PUBLIC_ENV !== config.environments.prod) {
    return data.map((item) =>
      typeof item === "object" ? JSON.stringify(item, null, 2) : item
    );
  }
};

/**
 * Logger module.
 * @namespace logger
 */
const logger = {
  /**
   * Log a message to the console in white color.
   * @param {...*} data - The data to be logged.
   */
  log: function (...data) {
    const msg = showLogs(data);
    if (msg) {
      log(chalk.white(msg));
    }
  },

  /**
   * Log an informational message to the console in bright blue color.
   * @param {...*} data - The data to be logged.
   */
  info: function (...data) {
    const msg = showLogs(data);
    if (msg) {
      log(chalk.blueBright(msg));
    }
  },

  /**
   * Log a success message to the console in bright green color.
   * @param {...*} data - The data to be logged.
   */
  success: function (...data) {
    const msg = showLogs(data);
    if (msg) {
      log(chalk.greenBright(msg));
    }
  },

  /**
   * Log a warning message to the console in bright yellow color.
   * @param {...*} data - The data to be logged.
   */
  warn: function (...data) {
    const msg = showLogs(data);
    if (msg) {
      log(chalk.yellowBright(msg));
    }
  },

  /**
   * Log an error message to the console in bright red color.
   * @param {...*} data - The data to be logged.
   */
  error: function (...data) {
    const msg = showLogs(data);
    if (msg) {
      log(chalk.redBright(msg));
    }
  },

  /**
   * Log a debug message to the console in gray color.
   * @param {...*} data - The data to be logged.
   */
  debug: function (...data) {
    const msg = showLogs(data);
    if (msg) {
      log(chalk.gray(msg));
    }
  },

  /**
   * Log a test message to the console in cyan color.
   * @param {...*} data - The data to be logged.
   */
  test: function (...data) {
    const msg = showLogs(data);
    if (msg) {
      log(chalk.cyan(msg));
    }
  },

  /**
   * Log a custom message with a specified color to the console.
   * @param {string} color - The Chalk color to be applied to the message.
   * @param {...*} data - The data to be logged.
   */
  custom: function (color, ...data) {
    const msg = showLogs(data);
    if (msg) {
      if (chalk[color]) {
        log(chalk[color](msg));
      } else {
        log(chalk.white(msg)); // Fallback to white if color is invalid
      }
    }
  },
};

// Export the logger object for use in other modules
export default logger;
