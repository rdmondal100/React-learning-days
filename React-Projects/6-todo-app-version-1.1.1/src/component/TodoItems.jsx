import css from "./TodoItems.module.css";
/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { ContextForTodoItems } from "../store/todo-items-store";

// eslint-disable-next-line react/prop-types
const TodoItems = () => {
  const {todoItems,deleteItem}= useContext(ContextForTodoItems);
  console.log(todoItems);



  return (
      <div className={css["items-container"]}>
        {todoItems.map((items, index) => {
          return <TodoItem
            todoName={items.name}
            todoDate={items.dueDate}
            key={index}
            itemIndex={index}
            hanldeOnclickForDelete={deleteItem}
          ></TodoItem>
        })}
      </div>
    
  );
};

export default TodoItems;
