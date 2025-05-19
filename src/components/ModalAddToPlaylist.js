import React from 'react';
import styles from './SearchResult.module.css';
import {PlusIcon, OpenIcon, RemoveIcon, CloseIcon} from '../assets/Icons';

function ModalAddToPlaylist({ playlists, track, onSelect, onClose }) { // ← NEW: props for action
  return (
    <div className={styles.PopUpBackdrop}>

     <div className={styles.AddToPlayList}>

	    <div className={styles.AddToPlaylistHeader}>
	      <h3>Select a Playlist</h3>
	      <CloseIcon className={styles.CrossClose} onClick={onClose} />
        </div>
      
        <div className={styles.Playlist}>
	        {playlists.map((playlist) => (
                <>
                    <div className={styles.OnePlaylist}>
                        <p key={playlist.id}>{playlist.name}</p>
                        <button onClick={() => onSelect(playlist.id)}>Add</button> {/* ← NEW */}
                    </div>
                </>
	        ))}
	    </div>
      
      </div>
    </div>);
}

export default ModalAddToPlaylist;