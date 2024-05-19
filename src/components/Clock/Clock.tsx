import { useState, useEffect } from "react";
import "../../App.css";
import React from "react";
import Utils from "../../utils/Utils";
import "./Clock.css";

function Clock() {
  const utils = new Utils();

  const [time, setTime] = useState(new Date());
  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(utils.isDarkModeOn());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { formattedTime, formattedDate } = utils.formatTimeAndDate(time);

  return (
    <main
      className={ `clock__display ${isDarkModeOn ? "dark-mode__display" : "light-mode__display"}` }
      data-testid="clock__container"
    >
      <div
        className="date-time__container"
        data-testid="date-time__container"
      >
        <h1 data-testid="formatted-time">{formattedTime}</h1>
        <p data-testid="formatted-weekday">{formattedDate}</p>
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
