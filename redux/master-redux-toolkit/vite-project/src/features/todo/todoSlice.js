import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [{ id: 1, task: "Hello Redux-toolkit" }]
// }


const getLocalStorage = () => {
  const localTodo = localStorage.getItem("todoData")
  const todos = JSON.parse(localTodo)
  return (todos && todos.length > 0) ? todos : []
}
// console.log(getLocalStorage())


const todoSlice = createSlice({

  name: 'todo',

  initialState: {
    todos: getLocalStorage()
  },

  reducers: {
    addTodo: (state, action) => {
      console.log("Add Todo Called..")
      console.log(action.payload.task)
      const todo = {
        id: nanoid(),
        task: action.payload,
        }
      state.todos.push(todo)
      localStorage.setItem("todoData", JSON.stringify(state.todos))
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      localStorage.setItem("todoData", JSON.stringify(state.todos))
    }
    
  }
})


// export const todoActions=todoSlice.actions
export const { addTodo, removeTodo, storedTodo } = todoSlice.actions

export default todoSlice.reducer;