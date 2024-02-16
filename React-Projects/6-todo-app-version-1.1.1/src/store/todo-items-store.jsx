/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";
import { useState, useReducer } from "react";

export const ContextForTodoItems = createContext([]);

const todoItemsPureFunRetucer = (currentTodo, action) => {
  // console.log(action.payload);
  let newTodoItems = currentTodo;
  
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodo,
      { name: action.payload.newTodo, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    console.log("");
    newTodoItems = currentTodo.filter((elements, index) => {
      return index != action.payload.todoIndex;
    });
  }
  return newTodoItems;
};
const TodoItemsContextProvider = ({children}) => {

  const [todoItems, dispaceTodoItems] = useReducer(todoItemsPureFunRetucer, []);

  const addNewItem = (newTodo, itemDueDate) => {
    const newAction = {
      type: "NEW_ITEM",
      payload: {
        newTodo: newTodo,
        itemDueDate: itemDueDate,
      },
    };
    dispaceTodoItems(newAction);
      // const [todoItems, setTodoItem] = useState([]);
    // console.log(`New Todo : ${newTodo} Due Date: ${itemDueDate}`);
    // let newTodoItems = [...todoItems, { name: newTodo, dueDate: itemDueDate }];
    // setTodoItem(newTodoItems);

    // setTodoItem((updatedTodoArray) => {
    //   const newTodoItemsArray = [
    //     ...updatedTodoArray,
    //     { name: newTodo, dueDate: itemDueDate },
    //   ];
    //   return newTodoItemsArray;
    // });
    // console.log(todoItems)
    // console.log(newTodoItems)
};

const deleteItem = (todoTask, todoIndex) => {
  const deleteAction = {
    type: "DELETE_ITEM",
    payload: {
      todoTask: todoTask,
      todoIndex: todoIndex,
    },
  };
  dispaceTodoItems(deleteAction);


// console.log(`Deleted Item Name:${todoTask}
//         Index: ${todoIndex}`);
// const newIToDoItems = todoItems.filter((elements, index) => {
//   return index != todoIndex;
// });
// setTodoItem(newIToDoItems);
};
return    <ContextForTodoItems.Provider
value={{
  todoItems: todoItems,
  addNewItem: addNewItem,
  deleteItem: deleteItem,
}}
>
  {children}
</ContextForTodoItems.Provider>
}
export default TodoItemsContextProvider;
