import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privecyChecked: false
}

const counterReducer = (store = INITIAL_VALUE, action) => {

  let newstore = store;
  if (store.counter >= 0) {
    console.log("Action Recived: ", action)
    if (action.type === "INCREMENT") {
      return { ...store, counter: store.counter + 1 }
    }
    if (action.type === "DICREMENT") {
      console.log(store.counter)
      return { ...store, counter: store.counter - 1 }
    }
    if (action.type === "ADD") {
      console.log(action.payload.num)
      console.log(store.counter)

      return { ...store, counter: store.counter + Number(action.payload.num) }
    }
  }
  if (action.type === "PRIVACY_CHECKED") {
    console.log(store.privecyChecked)
    console.log(action.payload.updatedIsChecked)
    console.log(store.counter)
    return { ...store, privecyChecked: action.payload.updatedIsChecked }
  }
  return newstore;

}

const cunterStore = createStore(counterReducer)

export default cunterStore;