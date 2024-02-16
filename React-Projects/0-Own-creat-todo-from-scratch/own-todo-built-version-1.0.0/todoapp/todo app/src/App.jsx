import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

import AppTitle from "./components/AppTitile";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import UserContextProvider from "./context/UserContextProvider";



function App() {




// console.log("TodoItems"+todoItems.name)
// console.log("defaultTodos"+defaultTodos.name)



  return (
    <>
    <UserContextProvider>

  
      <AppTitle></AppTitle>
      <AddTodo ></AddTodo>
      <TodoList ></TodoList>
      </UserContextProvider>
    </>
  );
}

export default App;
