import React from 'react';
import styles from './SearchResult.module.css';

export default function AddToPlaylist({onClose}) {
    return (
        <div className={styles.PopUpBackdrop}>
            <div className={styles.AddToPlayList}>

                <div className={styles.AddToPlaylistHeader}>
                    <h3>Add to Playlist</h3>
                    <button className={styles.CrossClose} onClick={onClose}>Close</button>
                </div>

                <div className={styles.Playlist}>
                    <p>Playlist Name 1</p>
                    <button className={styles.AddAction}>Add</button>
                    <button className={styles.RemoveAction}>Remove</button>
                </div>

                <div className={styles.Playlist}>
                    <p>Playlist Name 2</p>
                    <button className={styles.AddAction}>Add</button>
                    <button className={styles.RemoveAction}>Remove</button>
                </div>

            </div>
        </div>
    );
};