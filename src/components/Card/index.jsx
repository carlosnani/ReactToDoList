import {BsCheckSquareFill} from "react-icons/bs";

export default function Card({setTaskName, taskName,addTasks,taskListContent, children }) {
  return (
    <div className="card shadow mt-5">
      <div className="card-header">
        <h4 className="card-title text-center">{children}</h4>
      </div>

      <div className="card-body">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a Task"
            onChange={(event) => setTaskName(event.target.value)}
            value={taskName}
          />
          <button
          className="btn btn-primary btn-lg btn-block"
          type="button"
          onClick={addTasks}
          >
            <BsCheckSquareFill />
          </button>
        </div>
        {taskListContent}
      </div> 

    </div>
  );
}
