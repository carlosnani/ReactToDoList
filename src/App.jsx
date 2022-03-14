import { useState } from "react";
import { BsFillTrashFill, BsCheckSquareFill, BsXLg } from "react-icons/bs";
import Modal from "react-modal";
import Board from "./components/Board";
import Card from "./components/Card";
//Css
import './styles/main.css';
 

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
      <h2 className="text-center">Error</h2>
      <p>Please enter a task name between 1 and 60 characters</p>
      <button className="btn btn-danger btn-block" onClick={() => setModalIsOpen(false)}><BsXLg/></button>                 
    </Modal>
    
    <Board>
    <Card 
            setTaskName={setTaskName}
            taskName={taskName}
            addTasks={addTasks}
            taskListContent={taskListContent}
    >      
      React TODO List
    </Card>
    </Board>
 
    </>
  );
}
