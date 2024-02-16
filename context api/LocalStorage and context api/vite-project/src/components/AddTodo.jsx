/* eslint-disable react/prop-types */
import { IoIosAdd } from "react-icons/io";

import css from "./AddTodo.module.css";
import { useTodo } from "../context";
import { InputBox } from "./InputBox";

const AddTodo = () => {
  const { toggleInput, setToggleInput } = useTodo();

  return (
    <>
      <div id={css["form-todo"]}>
        {toggleInput ? (
          <InputBox />
        ) : (
          <button
            className={`${css["creat-todo"]} btn btn-success `}
            onClick={() => setToggleInput(true)}
          >
            Creat Task <IoIosAdd className={css["add-icon"]} />
          </button>
        )}
      </div>
    </>
  );
};

export default AddTodo;
