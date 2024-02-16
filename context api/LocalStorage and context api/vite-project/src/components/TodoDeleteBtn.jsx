import { AiFillDelete } from "react-icons/ai";
import css from "./TodoDeleteBtn.module.css"

// eslint-disable-next-line react/prop-types
const TodoDeleteBtn =({forDeleteBtnClick,todoIndex,todoItems})=>{

  const onTodoDeleteBtn=()=>{
    forDeleteBtnClick(todoItems,todoIndex)
    
  } 

  return <>
   <button className={`${css["delete-btn"]} btn btn-danger `} onClick={onTodoDeleteBtn}>
            <AiFillDelete />
          </button>
  
          </>

}

export default TodoDeleteBtn;