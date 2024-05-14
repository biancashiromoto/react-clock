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
} 