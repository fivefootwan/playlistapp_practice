import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Playlist.module.css';
import {PlusIcon, OpenIcon} from '../assets/Icons';
import {ModalCreatePlaylist} from './ModalCreatePlaylist';
  
function Playlist() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.PlaylistsContainer}>

            <div className={styles.PlaylistHeader}>
                <h2>Your Playlists</h2>
                {/* <button className={styles.CreatePlaylist} type="button">New Playlist</button> */}
                <PlusIcon onClick={() => setIsModalOpen(true)} />
            </div>

            {isModalOpen && ( //if isModalOpen is true then render the component below
            <ModalCreatePlaylist 
                onClose={() => setIsModalOpen(false)}
                onCreate={(playlistName) => {
                console.log("Create playlist with name:", playlistName);
                setIsModalOpen(false);
                }}
            />
            )}


            <div className={styles.Playlists}>
                <div className={styles.Playlist}>
                    <p>Playlist Title</p>
                    {/* <button className={styles.OpenPlaylist} type="button">Open Playlist</button> */}
                    <OpenIcon onClick={() => console.log("Plus clicked!")} />
                </div>

                <div className={styles.Playlist}>
                    <p>Playlist Title</p>
                    {/* <button className={styles.OpenPlaylist} type="button">Open Playlist</button> */}
                    <OpenIcon onClick={() => console.log("Plus clicked!")} />
                </div>

                <div className={styles.Playlist}>
                <p>Playlist Title</p>
                    {/* <button className={styles.OpenPlaylist} type="button">Open Playlist</button> */}
                    <OpenIcon onClick={() => console.log("Plus clicked!")} />
                </div>

            </div>

        </div>
    )

};

export default Playlist;