/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { AiFillDelete } from "react-icons/ai";

function TodoItem({ todoName, todoDate,itemIndex,hanldeOnclickForDelete }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <div>{todoName} </div>
        </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => hanldeOnclickForDelete(todoName,itemIndex)}
          >
            <AiFillDelete />

          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
