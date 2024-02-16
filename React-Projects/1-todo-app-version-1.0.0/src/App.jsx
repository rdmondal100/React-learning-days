import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItem_1 from "./component/TodoItem-1";
import TodoItem_2 from "./component/TodoItem-2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <div className="items-container">
      <TodoItem_1/>
      <TodoItem_2/>
      </div>


    </center>
  );
}

export default App;
