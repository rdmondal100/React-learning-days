import {useSelector } from "react-redux";
import InvalidMessage from "./InvalidMessage";

const Header = () => {
  const privecyChecked = useSelector((store) => store.privecyChecked);
  console.log("Value: ",privecyChecked);
  const counter = useSelector((store) => store.counter);
  console.log(counter)
  


  return (
    <div className=" flex justify-center  text-pink-200 text-9xl font-bold relative top-16 ">
      Counter-{">"}{" "}
      {privecyChecked ? (
        <div className=" flex items-center text-[2.2rem] bg-zinc-800 border-[0px] rounded-md w-auto h-[80px] relative top-11 focus:outline-none pl-2 text-amber-600">
          {" "}
          {<InvalidMessage />}
        </div>
      ) : (
        <input
          className=" text-[2.2rem] bg-zinc-800 border-[0px] rounded-md w-[100px] h-[80px] relative top-11 focus:outline-none pl-2 text-amber-600"
          type="number"
          value={counter}
          readOnly
        ></input>
      )}
    </div>
  );
};
export default Header;
