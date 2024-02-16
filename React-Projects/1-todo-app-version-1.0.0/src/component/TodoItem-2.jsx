function TodoItem_2() {

  let todoName='Built React App';
  let todoDate='04/04/2024';
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          {todoName}
        </div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem_2;
