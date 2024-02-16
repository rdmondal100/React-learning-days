import css from "./TodoItems.module.css";
/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

// eslint-disable-next-line react/prop-types
const TodoItems = ({todoItems}) => {
  return (
    
      <div className={css["items-container"]}>
        {todoItems.map((items, index) => {
          return <TodoItem
            todoName={items.name}
            todoDate={items.duedate}
            key={index}

          ></TodoItem>
        })}
      </div>
    
  );
};

export default TodoItems;
