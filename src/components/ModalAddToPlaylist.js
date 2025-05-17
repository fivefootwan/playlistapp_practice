import React from 'react';
import styles from './SearchResult.module.css';
import {PlusIcon, OpenIcon, RemoveIcon, CloseIcon} from '../assets/Icons';

export default function AddToPlaylist({onClose}) {
    return (
        <div className={styles.PopUpBackdrop}>
            <div className={styles.AddToPlayList}>

                <div className={styles.AddToPlaylistHeader}>
                    <h3>Add to Playlist</h3>
                    <CloseIcon className={styles.CrossClose} onClick={onClose} />
                </div>

                <div className={styles.Playlist}>
                    <p>Playlist Name 1</p>
                    <PlusIcon className={styles.AddAction}/> {/* this is where to connect with playlist */}
                    <RemoveIcon className={styles.RemoveAction}/>
                </div>

                <div className={styles.Playlist}>
                    <p>Playlist Name 2</p>
                    <PlusIcon className={styles.AddAction}/> {/* this is where to connect with playlist */}
                    <RemoveIcon className={styles.RemoveAction}/>
                </div>

            </div>
        </div>
    );
};