import AppName from "./components/AppName";
import ClockDes from "./components/ClockDes";
import AppDate from "./components/AppDate";
import "./App.css";
import AppTime from "./components/AppTime";

function App() {
  return (
    <div className="clock-container">
      <AppName></AppName>
      <div className="items-container">
      <ClockDes></ClockDes>
      <AppDate></AppDate>
      <AppTime></AppTime>
      </div>

    </div>
  );
}

export default App;
