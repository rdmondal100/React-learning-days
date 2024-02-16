function AppDate(){
let time = new Date();
  return <div className="react-date">{time.toDateString()}</div>
}

export default AppDate;