"use client";
import React, { useState, useEffect } from "react";

const Timer = ({ initialCountdownTime, onTimerEnd }) => {
  const [countdownTime, setCountdownTime] = useState(initialCountdownTime);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdownTime((prevTime) =>
        prevTime > 0 ? prevTime - 1 : initialCountdownTime
      );
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
      if (countdownTime === 0) {
        // Notify when the timer reaches zero
        onTimerEnd();
      }
    };
  }, [countdownTime, initialCountdownTime, onTimerEnd]);

  return (
    <>
   <p className="text-white font-semibold text-lg p-4 rounded-md shadow-md bg-gradient-to-r from-pink-500 to-purple-800">
        Offer ends in: {formatTime(countdownTime)}
      </p>
    </>
  );
};

export default Timer;
