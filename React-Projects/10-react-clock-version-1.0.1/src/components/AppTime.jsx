import { useEffect } from "react";
import { useState } from "react";

function AppTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("cleared")
    };
  }, []);

  return <div className="react-time">{time}</div>;
}

export default AppTime;
