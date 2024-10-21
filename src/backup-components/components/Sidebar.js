import React, {useState} from 'react'
import { useModalContext } from './ModalProvider';

function Sidebar() {

    const {handleShowModal} = useModalContext();
    const [offCanvan, setOffCanvan] = useState(false)

    const handleSidebarModal = (content) => {
        handleShowModal('Sidebar Title', content)
    }

    const triggerOffCanvan = () => {
        setOffCanvan(!offCanvan);
    }

  return (
    <div>
        <div className='sidebar'>
            <div className='logo'>
                <h1 className='l-logo'>Sync.</h1>
                <h1 className='s-logo'>S.</h1>
            </div>
            <div className={`${ offCanvan ? 'offcanvan show' : ''} sidebar-itmes`}>
                <div className='active'>Home</div>
                <div onClick={() => handleSidebarModal("request")}>Home</div>
                <div>Home</div>
                <div>Home</div>
                <div typeof='button' onClick={triggerOffCanvan} style={{display: 'none'}}>Exit</div>
            </div>
            <button className='menu-button btn btn-dark' onClick={triggerOffCanvan} style={{display: 'none'}}><i class="fa-solid fa-bars"></i></button>
        </div>
    </div>
  )
}

export default Sidebar
