import {  useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
const AddTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoInput.trim()) return;
    dispatch(addTodo( todoInput ));
    setTodoInput("");
  };



  return (
    <div className=" max-w-xl mx-auto mt-8">
      <h1 className="text-5xl font-bold mb-20 text-orange-700">
        Todo App redux-toolkit
      </h1>
      <form onSubmit={handleAddTodo} className="flex mb-4">
        <input
          type="text"
          value={todoInput}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
          className="flex-1 h-16 py-2 px-4 mr-2 rounded-lg border outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="py-2  w-auto px-4 bg-yellow-400 text-zinc-900 rounded-lg hover:bg-orange-600 font-bold  text-xl"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
