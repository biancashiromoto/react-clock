import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import '../../App.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() =>{
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date) => {
    const formattedTime = format(date, 'hh:mm:ss');
    const weekDay = format(date, 'eeee');
    const currDate = format(date, 'MMM d, yyyy')
    return (
      <div className='clock-date--container'>
        <h1>{formattedTime}</h1>
        <p>{weekDay}</p>
        <p>{currDate}</p>
      </div>
    )
  }

  return (
    <div>
      {formatTime(time)}
    </div>
  )
}

export default Clock;
