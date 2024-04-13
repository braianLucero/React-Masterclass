import { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    console.log("cerrerando modal");
    setIsOpen(false);
  };

  return (
    <Modal
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
    >
      <h1>Hola Mundo </h1>
      <hr />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse libero
        suscipit quas quidem non commodi iure repudiandae. Autem praesentium
        porro dolores neque id explicabo, dolorem eaque architecto obcaecati
        cupiditate earum.
      </p>
    </Modal>
  );
};
