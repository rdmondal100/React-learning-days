import { useContext, useState } from "react";
import css from "./TodoDeleteBtn.module.css";
import { FaRegEdit } from "react-icons/fa";
import UserContext from "../context/UserContext";
import { InputBox } from "./InputBox";

// eslint-disable-next-line react/prop-types
const EditBtn = ({ todoIndex, singleTodo }) => {
  const [toggleEdit, settoggleEdit] = useState(false);
  const { toggle, setToggle, setDueDate, setTodoName, todoName, todoDueDate } =
    useContext(UserContext);

  const handleEditBtn = () => {

    setTodoName(singleTodo.name);
    setDueDate(singleTodo.dueDate);
    setToggle(true);
    
  };

  return (
    <>
      <button
        className={`btn btn-success ${css["edit-btn"]}`}
        onClick={handleEditBtn}
      >
        <FaRegEdit />
      </button>
      {toggleEdit && <InputBox />}
    </>
  );
};

export default EditBtn;
