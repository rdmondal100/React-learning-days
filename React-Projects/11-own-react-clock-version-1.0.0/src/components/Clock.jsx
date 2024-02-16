import { useEffect } from "react";
import { useState } from "react";

import ThemeBtn from "./ThemeBtn";
import Time from "../Time";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  let seconds = time.getSeconds().toString().padStart(2, '0');
  let minutes = time.getMinutes().toString().padStart(2, '0');
  let hours = time.getHours().toString().padStart(2, '0');


  //  console.log(seconds)
  return (
    <>

      <div className="clock_container ">
        <div className="clock__circle">
          <span className="clock__twelve"></span>
          <span className="clock__three"></span>
          <span className="clock__six"></span>
          <span className="clock__nine"></span>

          <div className="clock__rounder"></div>
          <div
            className="clock__hour"
            id="clock-hour"
            style={{ transform: `rotateZ(${hours * 30}deg)` }}
          ></div>
          <div
            className="clock__minutes"
            id="clock-minutes"
            style={{ transform: ` rotateZ(${minutes * 6}deg)` }}
          ></div>
          <div
            className="clock__seconds"
            id="clock-seconds"
            style={{ transform: `rotateZ(${seconds * 6}deg)` }}
          ></div>

          <ThemeBtn></ThemeBtn>
        </div>
      </div>
      <Time hours={hours} minutes={minutes} seconds={seconds}></Time>

    </>
  );
};

export default Clock;
