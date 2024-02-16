/* eslint-disable react/prop-types */
import css from "./ButtonsContainer.module.css";
const ButtonsContainer = ({handleBtn}) => {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
    "=",
    "💥"
  ];

  return (
    <div id={css["buttons-container"]}>
      {buttonsNames.map((items, index) => {
        return <button key={index} onClick={()=>handleBtn(items)}>{items}</button>;
      })}
    </div>
  );
};

export default ButtonsContainer;
