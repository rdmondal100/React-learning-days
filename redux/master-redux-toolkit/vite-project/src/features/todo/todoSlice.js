import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [{ id: 1, task: "Hello Redux-toolkit" }]
// }


const getLocalStorage = () => {
  try{

    const localTodo = localStorage.getItem("todoData")
    const todos = JSON.parse(localTodo)
    return (todos && todos.length > 0) ? todos : []
  }catch(error){
  console.error("Error fetching from local storage",error)
  return ["No stored todo is founded"]
  }
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
      console.log(action.payload)
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
    },

    editTodo: (state, action) => {
      console.log(action)
      const { id, task } = action.payload;
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task };
        }
        return todo;
      });
    
      localStorage.setItem("todoData", JSON.stringify(state.todos));
    }
    

  }
})


// export const todoActions=todoSlice.actions
export const { addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer;