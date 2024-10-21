import React, { createContext, useContext, useState } from 'react'
import { CloseButton } from 'react-bootstrap'

const ToastContext = createContext()

export const ToastMessageBoxProvider = ({children}) => {

    const [visibility, setVisibility] = useState(false)
    const [error, setError] = useState('')
    const [icon, setIcon] = useState(<i className="fa-solid fa-circle-check"></i>)
    const [message, setMessage] = useState('')

    const handleToastMessageBox = (x) => {
        console.log(x)
        if (x === 'error') {
            setError('error')
            setIcon(<i className="fa-solid fa-triangle-exclamation"></i>)
            setMessage(' Uoopsy, Something is Wrong!')
        } else {
            setError('')
            setIcon(<i className="fa-solid fa-circle-check"></i>)
            setMessage(" Yayyy, Your Request has been submited successfully")
        }
        setVisibility(true)
        if (visibility === false) {
          const timer = setTimeout(() => {
            setVisibility(false)
          }, 3000);
          return () => clearTimeout(timer);
        }
      }
    
      const handleButtonFromToast = () => {
        setVisibility(false)
      }

  return (
    <ToastContext.Provider value={{handleToastMessageBox}}>
        {children}
        <div className={`${error} ${visibility? 'show-toast': ''} toast-message-box`}>
            <p className='toast-message' >{icon} {message}</p>
            <CloseButton onClick={handleButtonFromToast}/>
        </div>
    </ToastContext.Provider>
  )
}

export const useToastContext = () => useContext(ToastContext)
