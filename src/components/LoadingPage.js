import React from 'react'

function LoadingPage({active}) {
  return (
    <div className={`loading-overlay ${active ? 'active' : ''}`}>
        <div className="spinner"></div>
    </div>
  )
}

export default LoadingPage
