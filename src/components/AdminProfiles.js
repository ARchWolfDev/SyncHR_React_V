import React from 'react'
import { Link } from 'react-router-dom'

function AdminProfiles() {

  const profileId = "ZW1wLTEwMDAx"

  return (
    <div>
      <Link to={`/profile/${profileId}`}>Profile</Link>
    </div>
  )
}

export default AdminProfiles
