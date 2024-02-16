/* eslint-disable react/prop-types */
import EditBtn from "./EditBtn";
import css from "./SingleTodo.module.css";

import TodoDeleteBtn from "./TodoDeleteBtn";

// eslint-disable-next-line no-unused-vars
const SingleTodo = ({ singleTodo, todoIndex,forDeleteBtnClick,todoItems }) => {
  // console.log(todoIndex, singleTodo);
  return (
    <>
      <div className={css["todolist-container"]}>
        <p className={css["show-date"]}>{singleTodo.dueDate!=''?singleTodo.dueDate:"Date Not Set"}</p>
        <div className={css["todo"]}>
          <p className={css["show-todo"]}>{singleTodo.name}</p>
         <EditBtn todoIndex={todoIndex} singleTodo={singleTodo}></EditBtn>
          <TodoDeleteBtn todoIndex={todoIndex} forDeleteBtnClick={forDeleteBtnClick} todoItems={todoItems}></TodoDeleteBtn>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
