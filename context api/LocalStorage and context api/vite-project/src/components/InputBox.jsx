import { useState } from "react";
import { useTodo } from "../context";
import css from "./AddTodo.module.css";
import { ImCross } from "react-icons/im";
import { MdOutlineAddCircleOutline } from "react-icons/md";

export const InputBox = () => {
  const [task, setTask] = useState([]);
  const [taskDate, setTaskDate] = useState([]);
  //HANDLE ON SUBMIT FUNCTIONS
  const {  addTodo, setToggleInput } =
    useTodo();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!task) return;

    addTodo({ task: task, dueDate: taskDate, completed: false });
      console.log(task,taskDate)
      setTask("");
      setTaskDate("");
    setToggleInput(false);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className="blur-background">
        <div className="inputbox_poup ">
          <div className="row kg-row">
            <div className="">
              <div>
                {" "}
                <div className="">
                  <input
                    type="date"
                    id={css["input-date"]}
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                  />
                  <button
                    className="cross-btn"
                    onClick={() => setToggleInput(false)}
                  >
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
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />{" "}
            </div>
          </div>
          <button className="btn btn-success" type="submit">
            Add Todo <MdOutlineAddCircleOutline className="add-icon" />
          </button>
        </div>
      </form>
    </>
  );
};
