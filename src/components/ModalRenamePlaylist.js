import React, { useState } from 'react';
import styles from "./Playlist.module.css";
import {CloseIcon} from "../assets/Icons";

export default function RenamePlaylist({onClose}) {
    return (
        <div className={styles.PopUpBackdrop}>
            <div className={styles.RenamePlaylist}>

                
                <div className={styles.RenameHeader}>
                <h4>Rename Your Playlist</h4>
                <CloseIcon onClick={onClose}/>
                </div>


                <div className={styles.RenameArea}>
                    <input placeholder='New Name Here' />
                    <button className={styles.RenameButton} type="button" style={{cursor: 'pointer'}}>Submit</button>
                </div>

            </div>
        </div>
    )
}