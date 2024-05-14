import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import '../../App.css';
import styles from './Clock.module.css';

function Clock() {
  
  const [time, setTime] = useState(new Date());
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date) => {
    const formattedTime = format(date, 'HH:mm:ss');
    const weekDay = format(date, 'eeee | MMM d, yyyy');
    return (
      <div className='clock-date--container'>
        <h1>{formattedTime}</h1>
        <p>{weekDay}</p>
      </div>
    )
  };

  return (
    <div className={ styles['clock-container'] }>
      <div className={`${styles['clock-display']} ${isDarkModeOn ? '' : styles['light-mode']}`}>
        {formatTime(time)}
      </div>
      <button
        onClick={ () => {
          setIsDarkModeOn(prevState => !prevState);
        } }
        className={ `${styles['toggle-mode-button']} ${ !isDarkModeOn ? '' : styles['light-mode-button'] }` }
      />
    </div>
  )
}

export default Clock;
