import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo({ title }) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    // console.log(title);
    setModalIsOpen(true);
  }

  function cancelModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={cancelModal} onConfirm={cancelModal}/>}
      {modalIsOpen && <Backdrop onCancel={cancelModal}/>}
    </div>
  );
}

export default Todo;
