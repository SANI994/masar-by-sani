"use client"
import React, { useEffect, useState } from 'react';

const CountdownTimer: React.FC = () => {
  const futureDate = new Date('2024-01-23T00:00:00'); // Set your target future date here

  const calculateTimeUnits = () => {
    const currentDate = new Date();
    const timeDifference = futureDate.getTime() - currentDate.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeUnits, setTimeUnits] = useState(calculateTimeUnits);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUnits(calculateTimeUnits);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // This effect will only run on the client side

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ border: '2px solid red', padding: '10px', marginRight: '5px' }}>
        <span>{timeUnits.days}</span>
        <div>Days</div>
      </div>
      <div style={{ border: '2px solid green', padding: '10px', marginRight: '5px' }}>
        <span>{timeUnits.hours}</span>
        <div>Hours</div>
      </div>
      <div style={{ border: '2px solid blue', padding: '10px', marginRight: '5px' }}>
        <span>{timeUnits.minutes}</span>
        <div>Minutes</div>
      </div>
      <div style={{ border: '2px solid orange', padding: '10px', marginRight: '5px' }}>
        <span>{timeUnits.seconds}</span>
        <div>Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
