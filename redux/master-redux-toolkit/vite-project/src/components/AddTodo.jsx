/* eslint-disable react/prop-types */
import {  useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice";
const AddTodo = ({editableTask}) => {
  // console.log(editableTask)
  const [todoInput, setTodoInput] = useState('');
  const [toggle,setToggle]=useState(false)
  const inputRef = useRef(null)

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if(!toggle){

      if (!todoInput.trim()) return;
      dispatch(addTodo( todoInput ));
      setTodoInput("");
    }
  };

  const hanleUpdateTodo =()=>{
    const newTask=todoInput;
    dispatch(editTodo({...editableTask,task:newTask}))
    setToggle(false)
    setTodoInput('')

  }


useEffect(()=>{
  if(toggle){
    inputRef.current.focus();
   const length = todoInput.length;
    
   inputRef.current.setSelectionRange(length,length)

 } 
},[toggle,editableTask])


useEffect(()=>{
  // console.log(editableTask.id)
  // console.log(editableTask.task)
  setToggle(editableTask.updatedstate)
setTodoInput(editableTask.task || "")
},[editableTask])

  return (<>
    <div className=" max-w-xl mx-auto mt-8">
      <h1 className="text-5xl font-bold mb-20 text-orange-700">
        Todo App redux-toolkit
      </h1>
      <form onSubmit={handleAddTodo} className="flex mb-4">
        <input
          type="text"
          ref={inputRef}
          value={todoInput}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
          className="flex-1 h-16 py-2 px-4 mr-2 rounded-lg border outline-none focus:border-orange-700"
        />
        {toggle?  <button
          onClick={hanleUpdateTodo}
          type="submit"

          className="py-2  w-auto px-4 bg-yellow-400 text-zinc-900 rounded-lg hover:bg-orange-600 font-bold  text-xl"
        >
          Update Todo
        </button>:  <button
          type="submit"
          className="py-2  w-auto px-4 bg-green-500 text-zinc-900 rounded-lg hover:bg-green-600 font-bold  text-xl"
        >
          Add Todo
        </button>}
     
       
      </form>
    </div>
     
</>
  );
};

export default AddTodo;
