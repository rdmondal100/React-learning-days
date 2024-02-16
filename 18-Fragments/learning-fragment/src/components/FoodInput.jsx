/* eslint-disable react/prop-types */
import css from "./FoodInput.module.css";
const FoodInput = ({handleOnChangeEvent}) => {


  return (
    <input
      type="text"
      placeholder="Enter Food Items here"
      className={css["food-input"]}
      onKeyDown={handleOnChangeEvent}
    ></input>
  );
};
export default FoodInput;
