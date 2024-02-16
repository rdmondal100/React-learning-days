import { useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { useContext } from "react";
import { ContextForTodoItems } from "../store/todo-items-store";

// eslint-disable-next-line react/prop-types
function AddTodo() {
  const {addNewItem} = useContext(ContextForTodoItems);
  console.log(addNewItem)
  const todoName=useRef();
  const todoDueDate=useRef();

  const handleAddBtn = (event) => {
    event.preventDefault();
    const CurrentTodoName=todoName.current.value;
    const CurrentTodoDuedate=todoDueDate.current.value;

    todoName.current.value='';
    todoDueDate.current.value='';
    addNewItem(CurrentTodoName, CurrentTodoDuedate);

  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddBtn}>
        <div className="col-6">
          <input
            type="text"
            ref={todoName}
            placeholder="Enter Todo Here"
            
          
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDueDate}
           
          ></input>
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
