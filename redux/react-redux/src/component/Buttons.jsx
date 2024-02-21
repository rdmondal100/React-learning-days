import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";

const Buttons = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxElement = useRef();

  const handleCheckBox = () => {
    const updatedIsChecked = !isChecked;
    setIsChecked(updatedIsChecked);
    dispatch({
      type: "PRIVACY_CHECKED",
      payload: { updatedIsChecked: updatedIsChecked },
    });
  };

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
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
        className={` w-40  h-20 flex items-center rounded-full cursor-pointer  transition-all duration-700 ease-linear ${isChecked?"  bg-orange-600":"bg-slate-400"} `}
      >
      <span className={` bg-zinc-700 w-16 h-16 z-20 absolute rounded-full shadow-lg transition-all duration-500 ease-in-out ${isChecked?" bg-orange-950 transform translate-x-24":""}`}></span>
      </div>
    </div>
  );
};

export default Buttons;
