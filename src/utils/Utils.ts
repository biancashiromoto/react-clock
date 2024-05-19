import { format } from "date-fns";

export default class Utils {
  /**
   * Formats the current date and time.
   * @param date The current date.
   * @returns an object containing the formatted time and date.
   */
  public formatTimeAndDate(date: Date) {
    const formattedTime = format(date, "HH:mm:ss");
    const formattedDate = format(date, "eeee | MMM d, yyyy");
    return { formattedTime, formattedDate };
  }

  /**
   * Verifies if the dark color scheme is activated in user's system settings.
   * @returns a boolean indicating wether the dark color scheme is activated.
   */
  public isDarkModeOn(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches || true;
  }
} 