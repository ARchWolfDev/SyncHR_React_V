import React from 'react'
import { useParams } from 'react-router-dom'

function ProfileComponent() {

  const {id} = useParams();


  return (
    <div>
      Profile id {id}
    </div>
  )
}

export default ProfileComponent
