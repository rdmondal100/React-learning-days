import {  useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterAction, privacyAction } from "../store";

const Buttons = () => {
  const dispatch = useDispatch();
  const checkBoxElement = useRef();

  const toggle = useSelector((store) => store.privacy);
                    


  const handleCheckBox = () => {
    dispatch(privacyAction.toggle());
    localStorage.setItem("toggle",JSON.stringify(toggle))
    console.log(toggle)
    // dispatch({
    //   type: "PRIVACY_CHECKED",
    //   payload: { updatedIsChecked: updatedIsChecked },
    // });
  };

  const handleIncrement = () => {
    // console.log("increment",counterAction.increment())

    dispatch(counterAction.increment());
    // dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    // console.log("direment",counterAction.dicrement())
    dispatch(counterAction.dicrement());
    // dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="flex justify-center text-5xl relative top-24 gap-8">
      <button
        onClick={handleDecrement}
        className="w-24 rounded-lg bg-red-600 h-20"
      >
        -
      </button>
      <button
        onClick={handleIncrement}
        className="w-24 rounded-lg bg-orange-600 h-20"
      >
        +
      </button>
      <div
        ref={checkBoxElement}
        onClick={handleCheckBox}
        className={` w-40  h-20 flex items-center rounded-full cursor-pointer  transition-all duration-700 ease-linear ${
          toggle ? "  bg-orange-600" : "bg-slate-400"
        } `}
      >
        <span
          className={` bg-zinc-700 w-16 h-16 z-20 absolute rounded-full shadow-lg transition-all duration-500 ease-in-out ${
            toggle ? " bg-orange-950 transform translate-x-24" : ""
          }`}
        ></span>
      </div>
    </div>
  );
};

export default Buttons;
