import React, {createContext, useContext} from "react";
import Modal from "./Modal";
import useModal from "./useModal";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const { modalRef, modalTitle, modalContent, handleShowModal} = useModal();

    return (
        <ModalContext.Provider value={{handleShowModal}}>
            {children}
            <Modal ref={modalRef} modalTitle={modalTitle} bodyContent={modalContent}/>
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)