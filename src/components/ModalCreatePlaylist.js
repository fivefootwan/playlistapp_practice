import React from 'react';
import styles from './Playlist.module.css'

export function ModalCreatePlaylist({ onClose, onCreate }) {
    return (
          <div className={styles.CreatePlayListModal}>
            <h3>New Playlist</h3>
            <div className={styles.CreateInput}>
                <input 
                type="text" 
                placeholder="Enter Playlist Name" 
                className={styles.input}
                />
                <button onClick={onClose}>Cancel</button>
                <button onClick={() => onCreate("hardcoded-name")}>Create</button>
              </div>
          </div>

      );
};
