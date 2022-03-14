import { useState } from "react";
import { BsFillTrashFill, BsCheckSquareFill, BsXLg } from "react-icons/bs";
import Board from "./components/Board";
import Card from "./components/Card";
import ModalError from "./components/ModalError";
//Css
import './styles/main.css';
 

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
   
    <div>
    <ModalError modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
    
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
    </div>
    
  );
}
