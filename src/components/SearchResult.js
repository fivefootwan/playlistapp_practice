import React from 'react';
import styles from './SearchResult.module.css';

function SearchResult({ tracks }) {
  return (
    <div className={styles.Result}> {/* ✅ Always render container to keep layout consistent */}
      <h2 className={styles.ResultTitle}>Results</h2>

      {(!tracks || tracks.length === 0) ? ( // ✅ Conditional content rendering only
        <p>No results found.</p>            // ✅ Instead of returning early, show message here
      ) : (
        tracks.map(track => (
          <div key={track.id} className={styles.Tracklist}>
            <span className={styles.SongTitle}>{track.name}</span>
            <span className={styles.ArtistName}>{track.artists[0].name}</span>
            <button className={styles.PlayButton}>Play</button>
            <button className={styles.AddToPlaylistButton}>Save to Playlist</button>
            <hr className={styles.Line} />
          </div>
        ))
      )}
    </div>
  );
}


export default SearchResult;
