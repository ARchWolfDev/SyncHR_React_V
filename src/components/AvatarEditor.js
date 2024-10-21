import React, { useState } from 'react';

function AvatarEditor({avatarData, setAvatarData}) {

    const [avatar, setAvatar] = useState('')

  const handleAvatarChange = (e) => {
    const newAvatarValue = e.target.value;
    setAvatar(newAvatarValue)
    setAvatarData(newAvatarValue)
  };

  console.log("Current avatarData:", avatarData);

  return (
    <div>
      <label htmlFor="avatarInput">Select New Avatar:</label>
      <input
        id="avatarInput"
        type="text"
        value={avatar}
        onChange={handleAvatarChange}
        placeholder="Enter new avatar URL or select file"
      />
    </div>
  );
}

export default AvatarEditor;