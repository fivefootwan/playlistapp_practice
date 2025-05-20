import React, { useState } from 'react';
import styles from "./Playlist.module.css";
import {CloseIcon} from "../assets/Icons";

export default function ModalRenamePlaylist({onClose, onRename, playlist}) { // RENAME REVIEW HERE
    const [newName, setNewName] = useState(""); // RENAME REVIEW HERE

    return (
        <div className={styles.PopUpBackdrop}>
            <div className={styles.RenamePlaylist}>

                
                <div className={styles.RenameHeader}>
                <h4>Rename Your Playlist</h4>
                <CloseIcon onClick={onClose}/>
                </div>


                <div className={styles.RenameArea}>
                    <input 
                    placeholder='New Name Here'
                    value={newName} // The current text shown inside the input comes from this React state variable: newName.
                    onChange={(e) => setNewName(e.target.value)}/>  {/* Every time the user types, update the React state (newName) to match the input field. */}

                    <button 
                    className={styles.RenameButton} 
                    type="button" 
                    style={{cursor: 'pointer'}}
                    onClick={() => { // RENAME REVIEW HERE
                        if (newName.trim()) {
                          onRename(playlist.id, newName); // ✅ call rename with correct ID and value // see function in app.js 
                          onClose(); // optional: auto-close after submit
                        }
                      }}>Submit</button>
                </div>

            </div>
        </div>
    )
}