import Modal from "react-modal";
import { BsFillTrashFill, BsCheckSquareFill, BsXLg } from "react-icons/bs";


Modal.setAppElement("#root")

export default function ModalError({modalIsOpen, setModalIsOpen}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
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
          position: "absolute",
        },
      }}
    >
      <h2 className="text-center">Error</h2>
      <p>Please enter a task name between 1 and 60 characters</p>
      <button
        className="btn btn-danger btn-block"
        onClick={() => setModalIsOpen(false)}
      >
        <BsXLg />
      </button>
    </Modal>
  )
}
