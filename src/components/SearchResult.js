import React, { useState } from 'react';
import styles from './SearchResult.module.css';
import ModalAddToPlaylist from './ModalAddToPlaylist';
import { PlusIcon } from '../assets/Icons';

function SearchResult({ tracks, playlists, addTrackToPlaylist }) {
  const [selectedTrack, setSelectedTrack] = useState(null); // ← NEW
  const [isModalOpen, setIsModalOpen] = useState(false); // ← NEW

  const handleAddToPlaylist = (track) => { // ← NEW
    setSelectedTrack(track);
    setIsModalOpen(true);
  };

  const handleSelectPlaylist = (playlistId) => { // ← NEW
    addTrackToPlaylist(selectedTrack, playlistId);
    setIsModalOpen(false);
    setSelectedTrack(null);
  };

  return (
    <div className={styles.Result}> {/* ✅ Always render container to keep layout consistent */}

      {(!tracks || tracks.length === 0) ? ( // ✅ Conditional content rendering only
        <h2 className={styles.ResultTitle}>No results found.</h2>            // ✅ Instead of returning early, show message here
      ) : ( 
      <>
      <h2 className={styles.ResultTitle}>Results</h2>,

      <div className={styles.TrackList}>
      {tracks.map((track) => (
        <div key={track.id} className={styles.TrackItem}>

          <div className={styles.TrackInfo}>
            <p className={styles.TrackName}>{track.name}</p>
            <p className={styles.ArtistName}>{track.artists[0].name}</p>
          </div>
          
          <div className={styles.ActionButtons}>
            <button
              className={styles.AddToPlaylistButton}
              onClick={() => handleAddToPlaylist(track)} // ← NEW
            >
              <PlusIcon />
            </button>
            <button type='button' className={styles.PlayButton}>Play</button>
          </div>

          <hr className={styles.Line} />
        </div>
      ))}
      </div>
      </> )}

    {isModalOpen && (
        <ModalAddToPlaylist
          playlists={playlists} // ← NEW
          track={selectedTrack} // ← NEW
          onSelect={handleSelectPlaylist} // ← NEW
          onClose={() => setIsModalOpen((false))} />)}
  
    </div>
  );
}


export default SearchResult;
