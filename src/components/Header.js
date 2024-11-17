import React from 'react'
import { useModalContext } from './ModalProvider'
import AvatarEditor from './AvatarEditor';
import Avatar from './Avatar';

function Header() {

  const {handleShowModal} = useModalContext();

  const handleAvatarEdit = () => {
    handleShowModal('Edit avatar', (prop) => <AvatarEditor {...prop} />)}

  return (
    <div className='heading'>
      <div className='welcome'>
        <h1>Welcome</h1>
        <p>Role</p>
      </div>
      <div className='avatar-container'>
        <Avatar name='Andrei Rachieru' size={100} />
        <span onClick={handleAvatarEdit} className='edit-icon badge rounded-pill text-bg-danger'><i id="editIcon" className="fa-solid fa-wand-magic-sparkles"></i></span>
      </div>
    </div>
  )
}

export default Header
