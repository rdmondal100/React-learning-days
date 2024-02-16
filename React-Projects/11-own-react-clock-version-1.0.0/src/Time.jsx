// eslint-disable-next-line react/prop-types
const Time=({hours,minutes,seconds})=>{


  return <center className="time-container">
    <div className="time">

    <span className="hours">{hours>=12?hours-12:hours}</span>
    <span className="dot">:</span>
    <span className="minutes">{minutes}</span>
    </div>
    <div className="right_side">
    <span className="seconds">{seconds}</span>
    <span className="ampm">{ hours>=12?" PM":" AM"}</span>

    </div>
    </center>
}
export default Time;