import React, { useState } from 'react';

function AvatarEditor() {
  const [avatarData, setAvatarData] = useState(''); // Use state to manage the avatar input

  const handleAvatarSelect = (e) => {
    const selectedAvatar = e.target.value;
    setAvatarData(selectedAvatar);
    // onAvatarChange(selectedAvatar) // Update local state// Optionally, call onAvatarChange here for live updates
  };

  return (
    <div>
      <label htmlFor="avatarInput">Select New Avatar:</label>
      <input
        id="avatarInput"
        type="text"
        value={avatarData}
        onChange={handleAvatarSelect}
        placeholder="Enter new avatar URL or select file"
      />
    </div>
  );
}

export default AvatarEditor;