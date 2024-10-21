import { useState, useRef } from "react";

const useModal = () => {
    const modalRef = useRef(null);
    const [modalTitle, setModalTitle] = useState('')
    const [modalContent, setModalContent] = useState(null);

    const handleShowModal = (title, content) => {
        setModalTitle(title)
        setModalContent(content);
        const modalElement = modalRef.current;
        const modalInstance = new window.bootstrap.Modal(modalElement);
        modalInstance.show();
    }
    return { modalRef, modalTitle, modalContent, handleShowModal};
}

export default useModal