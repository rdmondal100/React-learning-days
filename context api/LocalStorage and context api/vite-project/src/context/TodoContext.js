/* eslint-disable no-unused-vars */
import {createContext,  useContext } from 'react'

export const TodoContext = createContext({
  todos:[
    {
      id:1,
      task:"My Todo Task",
      dueDate:"02-01-2024",
      completed:false,
    }
  ],
  addTodo:(todo) =>{},
  updateTodo:(id,todo) =>{},
  deleteTodo:(id) =>{},
  toggleCompleted:(id) =>{},
  toggleInput:false
});


export  const TodoProvider = TodoContext.Provider;


export const useTodo = () => {

  return useContext(TodoContext);
} 