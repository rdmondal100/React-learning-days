import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";

function App() {
  const todoItems=[
    {
    name: 'Buy Milk',
    dueDate: '20-02-2024'
  },
    {
    name: 'Finish React Course',
    dueDate: '20-12-2023'
  }
  ,
    {
    name: 'Built React Project',
    dueDate: '1-10-2024'
  }
]
  return (
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <div className="items-container">
        <TodoItems todoItems={todoItems}></TodoItems>
        
      </div>


    </center>
  );
}

export default App;
