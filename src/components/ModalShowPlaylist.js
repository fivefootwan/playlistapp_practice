import React, { useState} from "react";
import {PlusIcon, OpenIcon, RemoveIcon, CloseIcon, PlayIcon} from '../assets/Icons';
import styles from './SearchResult.module.css'

export default function ModalShowPlaylist({ onClose, playlist }) {

    return (
        <div className={styles.PopUpBackdrop}>

            <div className={styles.ShowPlaylist}>
                
                <div className={styles.PlaylistHeader}>
                    <h2>{playlist.name}</h2>
                    <CloseIcon className={styles.CrossClose} onClick={onClose} />
                </div>

                <div className={styles.SongsinPlaylist}>
                {playlist.tracks.map((track, index) => (
                <div key={index} className={styles.TrackItem}>
                    <p>{track.name}</p>   
                    <p>{track.artists[0].name}</p>   
                    <PlayIcon/>
                    <RemoveIcon/>
                </div>
                 ))}
                </div>

                
        </div> 

        </div>
    )
}