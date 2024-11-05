import React, { useState } from 'react';
import { useModalContext } from './ModalProvider';
import { useToastContext } from './ToastMessageBoxProvider';
import SettingsModal from './SettingsModal';
import RequestNewTimeOffModal from './RequestNewTimeOffModal';
import HistoryTimeOffModal from './HistoryTimeOffModal';
import RequestNewRequestModal from './RequestNewRequestModal';
import HistoryRequestModal from './HistoryRequestModal';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {

  const activeButtonSubNav = {backgroundColor: 'black', borderRadius: '0.375rem 0.375rem 0px 0px'}

  const {handleToastMessageBox} = useToastContext();
  const {handleShowModal} = useModalContext();
  const [offCanvan, setOffCanvan] = useState(false);
  const [timeOffSubNav, setTimeOffSubNav] = useState(false)
  const [requestsSubNav, setRequestsSubNav] = useState(false)
  const location = useLocation()

  const handleSettingsModal = () => {handleShowModal('Settings', (props) => <SettingsModal {...props} />)};
  const handleTimeOffButton = () => {setTimeOffSubNav(!timeOffSubNav)}
  const handleRequestNewTimeOffModal = () => {handleShowModal('Request new Time Off', (props) => <RequestNewTimeOffModal {...props}/>)}
  const handleHistoryTimeOffModal = () => {handleShowModal('Time Off History', (props) => <HistoryTimeOffModal {...props}/>)}
  const handleRequestsButton = () => {setRequestsSubNav(!requestsSubNav)}
  const handleNewRequestModal = () => {handleShowModal('New Request', (props) => <RequestNewRequestModal {...props} />)}
  const handleHistoryRequestsModal = () => {handleShowModal('Requests History', (props) => <HistoryRequestModal {...props} />)}


  // TESTS
  const triggerOffCanvan = () => {setOffCanvan(!offCanvan);};
  const handleClick = () => {handleToastMessageBox()}

  // active-nav-item

  return (
    <div>
      <div className="sidebar">
        <div className="logo">
          <h1 className="l-logo">Sync.</h1>
          <h1 className="s-logo">S.</h1>
        </div>
        <div className={`${offCanvan ? 'offcanvan show' : ''} sidebar-items`}>
          <Link to={'/home'} className={location.pathname === '/home'? 'active-nav-item': ''}><i className="fa-solid fa-house"></i>Home</Link>
          <Link to={'/admin/'} className={location.pathname.startsWith('/admin')? 'active-nav-item': ''}><i className="fa-solid fa-star"></i>Admin</Link>
          <div 
            role='button' 
            onClick={handleTimeOffButton} 
            style={timeOffSubNav? activeButtonSubNav:{}}>
              Time Off <i className={`fa-solid fa-chevron-down arrow ${timeOffSubNav? 'rotated' : ''}`}></i>
          </div>
          <div className={`sidebar-sub-items ${timeOffSubNav? 'show-sub-items': ''}`}>
            <div role='button' onClick={handleRequestNewTimeOffModal}>Request New</div>
            <div role='button' onClick={handleHistoryTimeOffModal}>History</div>
          </div>
          <div 
            role='button' 
            onClick={handleRequestsButton}
            style={requestsSubNav? activeButtonSubNav:{}}>
              Requests <i className={`fa-solid fa-chevron-down arrow ${requestsSubNav? 'rotated' : ''}`}></i>
          </div>
          <div className={`sidebar-sub-items ${requestsSubNav? 'show-sub-items': ''}`}>
            <div role='button' onClick={handleNewRequestModal}>Request New</div>
            <div role='button' onClick={handleHistoryRequestsModal}>History</div>
          </div>
          <div role='button' onClick={handleClick}>Inbox</div>
          <div role='button' onClick={handleSettingsModal}>Settings</div>
          <div role='button' onClick={handleClick}>Documents</div>
          <div role='button' onClick={handleClick}>Internal Documentation</div>
          <Link to={'/'}>Log Out</Link>
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
