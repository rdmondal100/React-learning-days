import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { TodoProvider } from "./context/index.js";
import AppTitile from "./components/AppTitile.jsx";
import AddTodo from "./components/AddTodo.jsx";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [dueDate, setdueDate] = useState([]);

  // ADD TODO
  const addTodo = (todo) => {
    console.log(todo);
    setTodos((previousTodo) => [{ id: Date.now(), ...todo }, ...previousTodo]);

    console.log(todos);
  };
  console.log(todos);

  // UPDATE TODO
  const updateTodo = (id, todo) => {
    setTodos((previousTodo) =>
      previousTodo.map((singleTodo) =>
        singleTodo.id === id ? todo : singleTodo
      )
    );
  };

  // DELETE TODO
  const deleteTodo = (id) => {
    setTodos((previousTodo) =>
      previousTodo.filter((singleTodo) => singleTodo.id !== id)
    );
  };

  // TOGGLE COMPLETE
  const toggleCompleted = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((singleTodo) =>
        singleTodo.id === id
          ? { ...singleTodo, completed: !singleTodo.completed }
          : singleTodo
      )
    );
  };

  // GET TODO FROM LOCAL STORAGE
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    // console.log(todos);
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //SAVE THE TODO IN LOCAL STORAGE

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //TOGGLE INPUT BOX
  const [toggleInput, setToggleInput] = useState(false);

  return (
    <TodoProvider
      value={{
        todos,
        setTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleCompleted,
        setToggleInput,
        toggleInput,
        dueDate,
        setdueDate,
      }}
    
    >
      <AppTitile></AppTitile>

      <AddTodo />
      <TodoList todos={todos} />
      {/* <AppTitle></AppTitle>
      <AddTodo ></AddTodo>
      <TodoList ></TodoList> */}
    </TodoProvider>
  );
}

export default App;
