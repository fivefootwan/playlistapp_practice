import React, { useState} from "react";
import {PlusIcon, OpenIcon, RemoveIcon, CloseIcon, PlayIcon} from '../assets/Icons';
import styles from './SearchResult.module.css'

export default function ModalShowPlaylist({ onClose}) {
    return (
        <div className={styles.PopUpBackdrop}>

            <div className={styles.ShowPlaylist}>
                
                <div className={styles.PlaylistHeader}>
                    <h2>Playlist Name</h2>
                    <CloseIcon className={styles.CrossClose} onClick={onClose} />
                </div>

                <div className={styles.SongsinPlaylist}>
                    <p>Song Title</p>
                    <PlayIcon/>
                    <RemoveIcon/>
                </div>

                <div className={styles.SongsinPlaylist}>
                    <p>Song Title</p>
                    <PlayIcon/>
                    <RemoveIcon/>
                </div>
                
        </div> 

        </div>
    )
}