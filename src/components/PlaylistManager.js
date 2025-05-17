import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Playlist.module.css';
import {PlusIcon, OpenIcon} from '../assets/Icons';
  
function Playlist() {

    return (
        <div className={styles.PlaylistsContainer}>

            <div className={styles.PlaylistHeader}>
                <h2>Your Playlists</h2>
                <button className={styles.CreatePlaylist} type="button">New Playlist</button>
                <PlusIcon onClick={() => console.log("Plus clicked!")} />
            </div>


            <div className={styles.Playlists}>
                <div className={styles.Playlist}>
                    <p>Song Title</p>
                    <button className={styles.OpenPlaylist} type="button">Open Playlist</button>
                    <OpenIcon onClick={() => console.log("Plus clicked!")} />
                </div>

                <div className={styles.Playlist}>
                    <p>Song Title</p>
                    <button className={styles.OpenPlaylist} type="button">Open Playlist</button>
                    <OpenIcon onClick={() => console.log("Plus clicked!")} />
                </div>

                <div className={styles.Playlist}>
                    <p>Song Title</p>
                    <button className={styles.OpenPlaylist} type="button">Open Playlist</button>
                    <OpenIcon onClick={() => console.log("Plus clicked!")} />
                </div>

            </div>
                       




        </div>
    )

};

export default Playlist;