import Modal from "react-modal";
import { useState } from "react";

export default function Alert({ children, setIsOpen }) {
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

  Modal.setAppElement("#__next");

  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeRequest = () => {
    setIsOpen(false);
    setIsModalOpen(false);
  };

  return (
    <Modal
      style={customStyles}
      isOpen={isModalOpen}
      onRequestClose={closeRequest}
    >
      <div className="max-w-screen-md">{children}</div>
    </Modal>
  );
}
