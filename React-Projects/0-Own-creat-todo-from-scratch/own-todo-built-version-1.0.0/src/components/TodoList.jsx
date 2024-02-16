/* eslint-disable react/prop-types */
import { useContext } from "react";
import SingleTodo from "./SingleTodo";
import css from "./TodoList.module.css";
import UserContext from "../context/UserContext";
const TodoList = () => {

  const {todoItems,handleDeleteBtn}=useContext(UserContext)
  // console.log(todolist)
  return (
    <>
    <div className={css["container"]}>
      {todoItems.map((items, index) => {
        return <SingleTodo key={index} singleTodo={items} todoIndex={index} forDeleteBtnClick={handleDeleteBtn} todoItems={todoItems}></SingleTodo>;
      })}
      </div>
    </>
  );
};

export default TodoList;
