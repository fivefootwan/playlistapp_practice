import React, { useState } from 'react';
import styles from './Playlist.module.css';
import ModalRenamePlaylist from './ModalRenamePlaylist';
import ModalShowPlaylist from './ModalShowPlaylist';
import { PlusIcon, OpenIcon, EditIcon } from '../assets/Icons';
import ModalCreatePlaylist from './ModalCreatePlaylist';


function PlaylistManager({ playlists, addPlaylist, onRemove }) { // ← UPDATED: function name matches file
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false); // ← NEW
  const [showModal, setModalShowModal] = useState(false);
  const [renamePlaylistModal, setRenamePlaylistModal] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState(false);

  return (
    <div className={styles.PlaylistsContainer}>

      <div className={styles.PlaylistHeader}>
        <h2>Your Playlists</h2>
        <PlusIcon onClick={() => setIsModalCreateOpen(true)} /> {/* ← NEW */}
      </div>

      {isModalCreateOpen && (
        <ModalCreatePlaylist
          onClose={() => setIsModalCreateOpen(false)}
          onCreate={(name) => {
            addPlaylist(name); // ← NEW
          }}
        />
      )}

      <div className={styles.Playlists}> {/* ← NEW */}
        {playlists.map((playlist) => (
          <div key={playlist.id} className={styles.Playlist}>
            <p>{playlist.name}</p>

            <EditIcon onClick={() => setRenamePlaylistModal(true)}/>
            {renamePlaylistModal && (
            <ModalRenamePlaylist onClose={() => setRenamePlaylistModal(false)} /> )} 

            <OpenIcon 
            onClick={() => {
              setSelectedPlaylist(playlist); // ← stores selected playlsit
              setModalShowModal(true);  
              }} 
            />               
            {showModal && (
            <ModalShowPlaylist 
            playlist={selectedPlaylist} // <- passes the playlist as a prop
            onClose={() => {setModalShowModal(false)}}
            onRemove={onRemove}
            />)}

          </div>
        ))}
      </div>

    </div>
  );
}

export default PlaylistManager;