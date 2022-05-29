import React, { useState, useEffect } from "react";

export const Stopwatch = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hours, setHours] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec === 59) {
        setMin(min + 1);
        setSec(0);
      }
      if (min === 59) {
        setHours(hours + 1);
        setMin(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  const CleanUp = () => {
    clearInterval(timer);
  };

  return (
    <div>
      <div>
        <div>
          <h1>Timer</h1>
          <h1>
            {hours < 10 ? "0" + hours : hours}:{min < 10 ? "0" + min : min}:
            {sec < 10 ? "0" + sec : sec}
          </h1>
        </div>

        <div>
          <button onClick={CleanUp}>Stop</button>
          <button
            onClick={() => {
              setSec(0);
              setMin(0);
              setHours(0);
            }}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};
