import React, { useState } from 'react';
import styles from './Playlist.module.css';

function ModalCreatePlaylist({ onClose, onCreate }) { // ← NEW: receives props
  const [inputValue, setInputValue] = useState(""); // ← NEW: local state

  const handleCreate = () => {
    if (inputValue.trim() !== "") {
      onCreate(inputValue); // ← NEW: call parent
    }
  };

  return (
   <div className={styles.CreatePlayListModal}>
	   <h3>New Playlist</h3>
	     <div className={styles.CreateInput}>
	      <input
	        type="text"
	        placeholder="Enter playlist name"
	        value={inputValue} // ← NEW
	        onChange={(e) => setInputValue(e.target.value)} // ← NEW
	      />
	      <button onClick={handleCreate}>Create</button> {/* ← NEW */}
	      <button onClick={onClose}>Cancel</button> {/* ← NEW */}
    </div>
   </div> 
  );
}

export default ModalCreatePlaylist;