/* eslint-disable react/prop-types */
import { IoIosAdd } from "react-icons/io";

import css from "./AddTodo.module.css";
import { useContext,  } from "react";
import UserContext from "../context/UserContext";
import { InputBox } from "./InputBox";


const AddTodo = () => {
  const { setToggle,toggle,setDueDate,setTodoName } =
    useContext(UserContext);

  const creatBtnHandaller = () => {
    
    setToggle(true);
    setDueDate('');
    setTodoName('')
  };

  return (
    <>
      <div id={css["form-todo"]}>
        <div></div>

        <button
          className={`${css["creat-todo"]} btn btn-success `}
          onClick={creatBtnHandaller}
        >
          Creat Task <IoIosAdd className={css["add-icon"]} />
        </button>
        {toggle && <InputBox />}
      </div>
    </>
  );
};

export default AddTodo;
