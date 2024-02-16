/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { MdSaveAs } from "react-icons/md";

import css from "./SingleTodo.module.css";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useTodo } from "../context";

const SingleTodo = ({ singleTodo,Id }) => {

  const [todoEditAble, setTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(singleTodo.task);

  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();
  const editTodoBtn=()=>{
    updateTodo(singleTodo.id,{...singleTodo,task:todoMsg})
    setTodoEditable(false);
  }

const checkboxBtn =()=>{
  toggleCompleted(singleTodo.id)
}

  return (
    <>
      <div className={`todolist-container  ${singleTodo.completed? "completed":""} ${todoEditAble?"editable":""}`}>
        <div className="header_content">
          <p className={css["show-date"]}>
            {singleTodo.dueDate != "" ? singleTodo.dueDate : "Date Not Set"}
          </p>

          <input type="checkbox" className="checkbox" checked={singleTodo.completed}
          onChange={checkboxBtn}/>
        </div>

        <div className={css["todo"]}> 
          <textarea  id ={Id} className={`show-todo showtodoinputbox`} value={todoMsg} 
          readOnly={!todoEditAble}
          autoFocus
          onChange={(e)=>setTodoMsg(e.target.value)}
          />

          <button className=" edit-btn btn btn-success"onClick={()=>{
              const showTodoInput = document.getElementById(`${Id}`);
              showTodoInput.focus();
              showTodoInput.setSelectionRange(showTodoInput.value.length, showTodoInput.value.length);

              if(singleTodo.completed) return;

              if(todoEditAble){
                editTodoBtn();
                console.log("inside"+todoEditAble)
              }
              else{
                setTodoEditable((previous)=>!previous)
              }
            }}
            disabled={singleTodo.completed}>
              {todoEditAble? <MdSaveAs/>: <FaRegEdit/> }

          </button>
          <button className="delete-btn btn btn-danger ">
            <AiFillDelete onClick={()=>deleteTodo(singleTodo.id)} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
