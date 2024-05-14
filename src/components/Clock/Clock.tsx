import { useState, useEffect } from "react";
import { format } from "date-fns";
import "../../App.css";
import styles from "./Clock.module.css";
import React from "react";
import Utils from "../../utils/Utils";

function Clock() {
  const utils = new Utils();

  const [isDarkModeOn, setIsDarkModeOn] = useState<boolean>(utils.isDarkModeOn());
  const { formattedTime, weekDay } = utils.formatTime(new Date());

  return (
    <div className={ styles["clock-container"] }>
      <div className={`${styles["clock-display"]} ${isDarkModeOn ? "" : styles["light-mode"]}`}>
        <div className="clock-date--container">
          <h1>{formattedTime}</h1>
          <p>{weekDay}</p>
        </div>
      </div>
      <button
        aria-label="toggle-mode"
        className={ `${styles["toggle-mode-button"]} ${ !isDarkModeOn ? "" : styles["light-mode-button"] }` }
        onClick={ () => {
          setIsDarkModeOn(prevState => !prevState);
        } }
        type="button"
      />
    </div>
  )
}

export default Clock;
