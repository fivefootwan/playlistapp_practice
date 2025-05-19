import React, { useState } from 'react';
import styles from './Playlist.module.css';
import RenamePlaylist from './ModalRenamePlaylist';
import ShowPlaylist from './ModalShowPlaylist';
import { PlusIcon, OpenIcon, EditIcon } from '../assets/Icons';
import ModalCreatePlaylist from './ModalCreatePlaylist';


function PlaylistManager({ playlists, addPlaylist }) { // ← UPDATED: function name matches file
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false); // ← NEW
  const [showModal, setModalShowModal] = useState(false);
  const [renamePlaylistModal, setRenamePlaylistModal] = useState(false);

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
            setIsModalCreateOpen(false); // ← NEW
          }}
        />
      )}

      <div className={styles.Playlists}> {/* ← NEW */}
        {playlists.map((playlist) => (
          <div key={playlist.id} className={styles.Playlist}>
            <p>{playlist.name}</p>
            <EditIcon onClick={() => setRenamePlaylistModal(true)}/>
            <OpenIcon onClick={() => setModalShowModal(true)} />
            {renamePlaylistModal && (
            <RenamePlaylist onClose={() => setRenamePlaylistModal(false)} /> )} 
          </div>
        ))}
      </div>

    </div>
  );
}

export default PlaylistManager;