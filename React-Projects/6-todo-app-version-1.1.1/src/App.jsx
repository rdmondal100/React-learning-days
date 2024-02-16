/* eslint-disable no-unused-vars */
import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";
import WelcomeMessage from "./component/WelcomeMessage";
import TodoItemsContextProvider, { ContextForTodoItems } from "./store/todo-items-store";
// import { useState } from "react";


function App() {



  return (
  <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />

        <WelcomeMessage></WelcomeMessage>

        <div className="items-container">
          <TodoItems></TodoItems>
        </div>
      </center>
      </TodoItemsContextProvider>
  );
}

export default App;
