import React from 'react'
import avatar from '../avatars/dog.png'
import { useModalContext } from './ModalProvider'
import AvatarEditor from './AvatarEditor';

function Header() {

  const {handleShowModal} = useModalContext();

  const handleAvatarEdit = () => {
    handleShowModal('Edit avatar', "avatar")}

  return (
    <div className='heading'>
      <div className='welcome'>
        <h1>Welcome</h1>
        <p>Role</p>
      </div>
      <div className='avatar-container'>
        <img src={avatar} className='avatar'></img>
        <span onClick={handleAvatarEdit} className='edit-icon badge rounded-pill text-bg-danger'><i id="editIcon" className="fa-solid fa-wand-magic-sparkles"></i></span>
      </div>
    </div>
  )
}

export default Header
