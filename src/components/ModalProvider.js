import React, { createContext, useContext, useState } from "react";
import Modal from "./Modal";
import { useToastContext } from "./ToastMessageBoxProvider";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {

    const {handleToastMessageBox} = useToastContext();
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(() => () => null); // Updated to store a component function
    const [value, setValue] = useState({});

  const handleShowModal = (title, ContentComponent) => {
    setModalTitle(title);
    setModalContent(() => ContentComponent); // Store component as a function to allow rerender
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };

  const handleSaveChanges = () => {
    console.log(JSON.stringify(value));
    handleToastMessageBox('')
    setModalShow(false); // Close the modal after saving
  };

  return (
    <ModalContext.Provider value={{ handleShowModal, value, setValue }}>
      {children}
      <Modal
        show={modalShow}
        onHide={handleCloseModal}
        modalTitle={modalTitle}
        BodyComponent={modalContent} // Pass the component itself
        value={value} // Pass the value to re-render the form correctly
        setValue={setValue}
        handleSaveChanges={handleSaveChanges}
      />
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
