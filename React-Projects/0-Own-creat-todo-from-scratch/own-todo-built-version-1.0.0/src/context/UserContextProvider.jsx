import  UserContext  from "./UserContext";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
 const UserContextProvider = ({ children }) => {

 

  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setDueDate] = useState("");
  const [toggle, setToggle] = useState(false);
  const [todoItems,setTodoItem]=useState([]);

  const handleCreatBtn =(todoName,todoDate)=>{
    // console.log(`Name: ${todoName} DueDate: ${todoDate}`)
    const newTodoItem={
      name:todoName,
      dueDate:todoDate
    }
    // console.log("newTodoItem"+newTodoItem);
    // console.log(`Updated Todo LIst: ${todoItems}`)
    setTodoItem([...todoItems,newTodoItem]);
  
  
  }

  const handleDeleteBtn=(todoItems,todoIndex)=>{
    // console.log(todoItems)
    // console.log(todoIndex)
    const newTodoItems=todoItems.filter((item,index)=>{return index!=todoIndex})
    setTodoItem(newTodoItems)
    // console.log(`New Todo Items: ${newTodoItems}`)
  }

  return (
    <>
      <UserContext.Provider
        value={{ todoName, setTodoName, todoDueDate, setDueDate,toggle,setToggle,handleCreatBtn,handleDeleteBtn,todoItems,setTodoItem, }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;