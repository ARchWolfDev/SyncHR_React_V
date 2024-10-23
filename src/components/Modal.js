import React from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";

const Modal = ({ show, onHide, modalTitle, BodyComponent, value, setValue, handleSaveChanges }) => {
  return (
    <BootstrapModal size="lg" show={show} onHide={onHide} centered>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{modalTitle}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {BodyComponent ? <BodyComponent value={value} setValue={setValue} /> : "No Content to Show"}
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save changes
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
