// import SingleTodo from "./SingleTodo";
import css from "./TodoList.module.css";
import { useTodo } from "../context";
import SingleTodo from "./SingleTodo";
const TodoList = () => {
  const {  todos } = useTodo();


  return (
    <>
      <div className={css["container"] }>
        {todos.map((items, index) => {
          //  return <div className="todo" key={items.id}>{items.task}</div>
          return (
            <SingleTodo 
              key={items.id}
              Id={items.id}
              singleTodo={items}
              todoIndex={index}
            ></SingleTodo>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
