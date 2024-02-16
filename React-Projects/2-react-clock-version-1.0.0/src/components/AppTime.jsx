function AppTime(){
  let time=new Date().toLocaleTimeString();

  return(
     <div className="react-time">{time}</div>)
}

export default AppTime;