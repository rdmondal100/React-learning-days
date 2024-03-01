import {useDispatch,useSelector } from 'react-redux';
import {  removeTodo} from '../features/todo/todoSlice';
import { RiDeleteBin7Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import AddTodo from './AddTodo';
import { useState } from 'react';

const ShowTodos = () => {
const [editableTask,setEditableTask]=useState({})
const todos = useSelector(state=>state.todos)
const dispatch = useDispatch();

const handleDelete=(id)=>{
  // console.log("delete clicked",id)
  dispatch(removeTodo(id))
}

const handleEdit=(id,task)=>{
  // setTodoInput(task)
  setEditableTask({id:id,task:task,updatedstate:true})
  console.log(id,task)
}


  return (
    <>
    <AddTodo editableTask={editableTask}/>
    <div className="max-w-md mx-auto mt-12 ">
      <ul className='gap-8 flex flex-col'>
      { todos && todos.map((todo)=>(
        // console.log(todo)
        <div key={todo.id} className="todocontainer bg-slate-200 px-7 h-16 flex items-center rounded-md justify-between text-xl text-stone-900 font-medium gap-5">
          <li >{todo.task}</li>
          <div className=" flex justify-between w-[7vw]">

          <button className=' text-green-600 hover:text-green-700 text-2xl' onClick={()=>handleEdit(todo.id,todo.task)}><FaEdit/></button>

          <button className=' text-red-600 hover:text-red-700 text-2xl' onClick={()=>handleDelete(todo.id)}><RiDeleteBin7Fill/></button>


          </div>
        </div>
      ))}
      </ul>
    </div>
    </>

  );
};

export default ShowTodos;
