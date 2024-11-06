import Modal from "react-modal";
import { useEffect, useState } from "react";

export default function Alert({ children, setIsOpen, disableKeys = true }) {
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

  useEffect(() => {
    if (disableKeys === true) {
      const handleKeyDown = (e) => {
        if (
          ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)
        ) {
          e.stopPropagation();
          e.preventDefault();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [disableKeys]);

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
