import { format } from "date-fns";

export default class Utils {
  /**
   * Formats the current date and time.
   * @param date The current date.
   * @returns an object containing the formatted time and the day of the week.
   */
  public formatTime(date: Date) {
    const formattedTime = format(date, "HH:mm:ss");
    const weekDay = format(date, "eeee | MMM d, yyyy");
    return {
      formattedTime: formattedTime,
      weekDay: weekDay
    };
  }

  /**
   * Verifies if the dark color scheme is activated in user's system settings.
   * @returns a boolean indicating wether the dark color scheme is activated.
   */
  public isDarkModeOn(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
} 