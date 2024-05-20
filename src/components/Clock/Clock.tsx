import { useState, useEffect } from "react";
import "../../App.css";
import React from "react";
import Utils from "../../utils/Utils";
import "./Clock.css";

/**
 * 
 * Clock component.
 * Displays a digital clock and current date, allowing the user to toggle between dark and light modes.
 */
function Clock() {
  /**
   * Instance of the utilities class for time formatting and dark mode checking.
   */
  const utils = new Utils();

  /**
   * State to store the current date and time.
   */
  const [dateAndTime, setDateAndTime] = useState(new Date());

  /**
   * State to store the current mode (dark or light).
   */
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(utils.isDarkModeOn());

  /**
   * Updates the time every second.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setDateAndTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { formattedTime, formattedDate } = utils.formatDateAndTime(dateAndTime);

  return (
    <main
      className={ `clock__display ${isDarkModeOn ? "dark-mode__display" : "light-mode__display"}` }
      data-testid="clock__container"
    >
      <div
        className="date-time__container"
        data-testid="date-time__container"
      >
        {/* Displays the formatted time */}
        <h1
          aria-live="assertive"
          data-testid="formatted-time"
        >
          {formattedTime}
        </h1>
        {/* Displays the formatted date */}
        <p
          aria-live="assertive"
          data-testid="formatted-weekday"
        >
          {formattedDate}
        </p>
      </div>
      <button
        aria-label="Toggle mode button"
        className={`toggle-mode__button ${isDarkModeOn ? "light-mode__button" : "dark-mode__button"}`}
        data-testid="toggle-mode__button"
        onClick={ () => {
          setIsDarkModeOn(prevState => !prevState);
        } }
        type="button"
      />
    </main>
  )
}

export default Clock;
