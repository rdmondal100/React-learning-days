import { useContext } from "react";
import css from "./AddTodo.module.css";
import UserContext from "../context/UserContext";
import { ImCross } from "react-icons/im";

export const InputBox = () => {
  const {
    setDueDate,
    setTodoName,
    todoName,
    todoDueDate,
    setToggle,
    handleCreatBtn,
  } = useContext(UserContext);

  // useContext()
  const handleOnchangeTodo = (event) => {
    // console.log(event.target.value)
    setTodoName(event.target.value);
  };

  const handleOnchangeDate = (event) => {
    // console.log(event.target.value)
    setDueDate(event.target.value);
  };
  const handleCloseBtn = () => {
    setToggle(false);
  };
  const handleAddTodo = () => {
    handleCreatBtn(todoName, todoDueDate);
    // console.log(todoDueDate,todoName)
    setTodoName("");
    setDueDate("");
    setToggle(false);
  };
  return (
    <>
      <div className="blur-background">
        <div className="inputbox_poup ">
          <div className="row kg-row">
            <div className="">
              <div>
                {" "}
                <div className="">
                  <input
                    type="date"
                    id={css["input-date"]}
                    onChange={handleOnchangeDate}
                    value={todoDueDate}
                  />
                  <button className=" cross-btn" onClick={handleCloseBtn}>
                    <ImCross />
                  </button>
                </div>{" "}
              </div>
            </div>
            <div className="">
              {" "}
              <textarea
                type="text"
                id={css["input-todo"]}
                placeholder="Enter Your Todo Here"
                onChange={handleOnchangeTodo}
                value={todoName}
              />{" "}
            </div>
          </div>
          <button className="btn btn-success" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
};
