import { useState } from "react";
import { BsFillTrashFill, BsCheckSquareFill } from "react-icons/bs";


export default function primary() {
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTasks() {
    if (taskName.length === 0 || taskName.length > 60) {
      return alert("Please enter a task name between 1 and 60 characters");
    } else {
      return setTaskList([...taskList, taskName]), setTaskName("");
    }
  }

  const taskListContent = taskList.map((task, index) => {
    return (
      <li
        className="list-group-item d-flex justify-content-between"
        key={index}
      >
        {task}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            deleteItemTask(index);
          }}
        >
          <BsFillTrashFill />
        </button>
      </li>
    );
  });

  function deleteItemTask(index) {
    let doubleTaskList = [...taskList];
    doubleTaskList.splice(index, 1);
    setTaskList(doubleTaskList);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow mt-5">
            <div className="card-header">
              <h4 className="card-title text-center">React TODO List</h4>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a Task"
                  value={taskName}
                  onChange={(event) => setTaskName(event.target.value)}
                />
                <button
                  className="btn btn-primary btn-lg"
                  type="button"
                  onClick={addTasks}
                >
                  <BsCheckSquareFill />
                </button>
              </div>

              {taskListContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
