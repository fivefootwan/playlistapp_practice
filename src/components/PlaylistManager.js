import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Playlist.module.css';
import RenamePlaylist from './ModalRenamePlaylist'
import ShowPlaylist from './ModalShowPlaylist';
import {PlusIcon, OpenIcon, EditIcon} from '../assets/Icons';
import {ModalCreatePlaylist} from './ModalCreatePlaylist';
  
function Playlist() {
    const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
    const [showModal, setModalShowModal] = useState(false);
    const [renamePlaylistModal, setRenamePlaylistModal] = useState(false);


    return (
        <div className={styles.PlaylistsContainer}>

            <div className={styles.PlaylistHeader}>
                <h2>Your Playlists</h2>
                {/* <button className={styles.CreatePlaylist} type="button">New Playlist</button> */}
                <PlusIcon onClick={() => setIsModalCreateOpen(true)} />
            </div>

            {isModalCreateOpen && ( //if isModalOpen is true then render the component below
            <ModalCreatePlaylist 
                onClose={() => setIsModalCreateOpen(false)}
                onCreate={(playlistName) => {
                console.log("Create playlist with name:", playlistName);
                setIsModalCreateOpen(false);
                }}
            />
            )}


            <div className={styles.Playlists}>
                <div className={styles.Playlist}>
                    <p>Playlist Title</p>
                    {/* <button className={styles.OpenPlaylist} type="button">Open Playlist</button> */}
                    <EditIcon onClick={() => setRenamePlaylistModal(true)}/>
                    <OpenIcon onClick={() => setModalShowModal(true)} />
                    {renamePlaylistModal && (
                    <RenamePlaylist onClose={() => setRenamePlaylistModal(false)} />
                    )} {/* ???? */}
                </div>

                <div className={styles.Playlist}>
                    <p>Playlist Title</p>
                    {/* <button className={styles.OpenPlaylist} type="button">Open Playlist</button> */}
                    <OpenIcon onClick={() => setModalShowModal(true)} />
                </div>

                <div className={styles.Playlist}>
                <p>Playlist Title</p>
                    {/* <button className={styles.OpenPlaylist} type="button">Open Playlist</button> */}
                    <OpenIcon onClick={() => setModalShowModal(true)} />
                </div>

            </div>
            {showModal && (
            <ShowPlaylist onClose={() => setModalShowModal(false)} />
            )}

        </div>
    )

};

export default Playlist;