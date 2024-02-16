/* eslint-disable react/prop-types */
import css from "./WelcomeMessage.module.css";
import { useContext } from "react";
import { ContextForTodoItems } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const {todoItems} = useContext(ContextForTodoItems);
console.log(todoItems)

return (
    <>
      {todoItems.length === 0 && (
        <p className={`${css["wc-message"]} `}>Enjoy Your Day</p>
      )}
    </>
  );
};

export default WelcomeMessage;
