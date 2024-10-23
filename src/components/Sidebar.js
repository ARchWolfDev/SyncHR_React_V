import React, { useState } from 'react';
import { useModalContext } from './ModalProvider';
import Form2 from './Form2';
import { useToastContext } from './ToastMessageBoxProvider';
import SettingsModal from './SettingsModal';

function Sidebar() {
  const {handleToastMessageBox} = useToastContext();
  const {handleShowModal} = useModalContext();
  const [offCanvan, setOffCanvan] = useState(false);

  const handleSettingsModal = () => {
    handleShowModal('Settings', (props) => <SettingsModal {...props} />)
  };

  const handleFormTwo = () => {
    handleShowModal('Form 2', (props) => <Form2 {...props} />);
  };

  const triggerOffCanvan = () => {
    setOffCanvan(!offCanvan);
  };

  const handleClick = () => {
    handleToastMessageBox()
  }

  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <h1 className="l-logo">Sync.</h1>
          <h1 className="s-logo">S.</h1>
        </div>
        <div className={`${offCanvan ? 'offcanvan show' : ''} sidebar-items`}>
          <div role='button' className="active-nav-item">Home</div>
          <div role='button' onClick={handleSettingsModal}>Settings</div>
          <div role='button' onClick={handleFormTwo}>Form 2</div>
          <div role='button' onClick={handleClick}>Home</div>
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
