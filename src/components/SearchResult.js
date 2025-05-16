import React from 'react';
import styles from './SearchResult.module.css';

function SearchResult({ tracks }) {
  if (!tracks || tracks.length === 0) {
    return <p className={styles.ResultTitle}>No results found.</p>;
  }

  return (
    <div className={styles.Result}>
      <h2 className={styles.ResultTitle}>Results</h2>
      {tracks.map(track => (
        <div key={track.id} className={styles.Tracklist}>
          <span className={styles.SongTitle}>{track.name}</span>
          <span className={styles.ArtistName}>{track.artists[0].name}</span>
          <button className={styles.PlayButton}>Play</button>
          <button className={styles.AddToPlaylistButton}>Save to Playlist</button>
          <hr className={styles.Line} />
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
