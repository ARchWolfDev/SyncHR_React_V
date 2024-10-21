import React, { useState } from 'react';
import { useModalContext } from './ModalProvider';
import Form1 from './Form1';
import Form2 from './Form2';

function Sidebar() {
  const { handleShowModal} = useModalContext();
  const [offCanvan, setOffCanvan] = useState(false);

  const handleFormOne = () => {
    handleShowModal('Form 1', (props) => <Form1 {...props} />);
  };

  const handleFormTwo = () => {
    handleShowModal('Form 2', (props) => <Form2 {...props} />);
  };

  const triggerOffCanvan = () => {
    setOffCanvan(!offCanvan);
  };

  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <h1 className="l-logo">Sync.</h1>
          <h1 className="s-logo">S.</h1>
        </div>
        <div className={`${offCanvan ? 'offcanvan show' : ''} sidebar-items`}>
          <div role='button' className="active-nav-item">Home</div>
          <div role='button' onClick={handleFormOne}>Form 1</div>
          <div role='button' onClick={handleFormTwo}>Form 2</div>
          <div role='button' >Home</div>
          <div
            typeof="button"
            onClick={triggerOffCanvan}
            style={{ display: 'none' }}
          >
            Exit
          </div>
        </div>
        <button
          className="menu-button btn btn-dark"
          onClick={triggerOffCanvan}
          style={{ display: 'none' }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
