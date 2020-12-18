import React, { useState, useEffect, useContext } from "react";
import "./Timer.css";
import { ReloadContext } from "../context/context";

const initialTime = { "minutes": "00", "seconds": "00" };

function Timer() {
  const [displayTime, setDisplayTime] = useState(initialTime);
  const [time, setTime] = useState(0);
  const [color, setColor] = useState("black");
  const { reload } = useContext(ReloadContext);

  useEffect(() => {
    setTime(0);
    setColor("black");
    setDisplayTime(initialTime);
  }, [reload]);

  useEffect(() => {  //timer
    const everySecond = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(everySecond);
  }, [time]);

  useEffect(() => { //converts time to hr/min/sec for display
    let minutes = 0;
    let seconds = 0;
    if (time / 60 >= 1) {
      seconds = time % 60;
      minutes = Math.floor(time / 60);
    } else {
      seconds = time;
    }
    setDisplayTime({
      "minutes": minutes < 10 ? "0" + minutes : minutes,
      "seconds": seconds < 10 ? "0" + seconds : seconds,
    });
    if (time > 300) {
      setColor("red");
    } else if (time > 180) {
      setColor("orange");
    } else {
      setColor("black");
    }
  }, [time]);

  return (
    <div className={`timer ${color}`}>
      {displayTime.minutes}:{displayTime.seconds}
    </div>
  );
}

export default Timer;
