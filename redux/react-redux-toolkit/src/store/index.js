// import { createStore } from "redux"
import { configureStore, createSlice } from '@reduxjs/toolkit'

// const INITIAL_VALUE = {
//   counter: 0,
//   privecyChecked: false
// }

//creating slice

//privacy slice
const privacySlice = createSlice({
  name: 'privacy',
  initialState: false,
  reducers: {
    toggle: (state) => {
      console.log("Loggled")

      return !state;
    },

  }
})
//counter slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { counterValue: 0 },
  reducers: {
    increment: (state, action) => {
      console.log("increment", action, state)
      state.counterValue++;
    },
    dicrement: (state, action) => {
      console.log("dicrement", action, state)
      state.counterValue--;
    },
    add: (state, action) => {
      console.log(action.payload.num)
      console.log(state.counterValue)
      console.log("add", action, state)
      state.counterValue += Number(action.payload.num)
    },
  }
})

// const counterReducer = (store = INITIAL_VALUE, action) => {

//   let newstore = store;
//   if (store.counter >= 0) {
//     console.log("Action Recived: ", action)
//     if (action.type === "INCREMENT") {
//       return { ...store, counter: store.counter + 1 }
//     }
//     if (action.type === "DICREMENT") {
//       console.log(store.counter)
//       return { ...store, counter: store.counter - 1 }
//     }
//     if (action.type === "ADD") {
//       console.log(action.payload.num)
//       console.log(store.counter)

//       return { ...store, counter: store.counter + Number(action.payload.num) }
//     }
//   }
//   if (action.type === "PRIVACY_CHECKED") {
//     console.log(store.privecyChecked)
//     console.log(action.payload.updatedIsChecked)
//     console.log(store.counter)
//     return { ...store, privecyChecked: action.payload.updatedIsChecked }
//   }
//   return newstore;

// }

// const cunterStore = createStore(counterReducer)
const cunterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  }
})

export default cunterStore;
export const counterAction = counterSlice.actions
export const privacyAction = privacySlice.actions