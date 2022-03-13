import { useState } from "react";
import { BsFillTrashFill, BsCheckSquareFill, BsXLg } from "react-icons/bs";
import Modal from "react-modal"


Modal.setAppElement("#root")

export default function primary() {

  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function addTasks() {
    if (taskName.length === 0 || taskName.length > 60) {
      setModalIsOpen(true)
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
    <>

    <Modal isOpen={modalIsOpen} 
    onRequestClose={() => setModalIsOpen(false)}
    style={{
      overlay: {
        backgroundColor: "rgba(0,0,0,0.5)"      
      },
      content: {
        backgroundColor: "white",
        border: "none",
        borderRadius: "10px",
        padding: "20px",
        width: "460px",
        height: "170px",
        margin: "auto",
        marginTop: "100px",
        zIndex: "9999",
        position: 'absolute',
      }
    }}

    >
      <h2>Error</h2>
      <p>Please enter a task name between 1 and 60 characters</p>
      <button className="btn btn-danger" onClick={() => setModalIsOpen(false)}><BsXLg/></button>     
      
    </Modal>

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
    </>
  );
}
