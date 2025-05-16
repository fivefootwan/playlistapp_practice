import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import styles from './SearchResult.module.css'

function SearchResult() {

    return (
        <div className={styles.Result}>
            <h2 className={styles.ResultTitle}>Results</h2>
            <div className={styles.Tracklist}>
                <span className={styles.SongTitle}>Song Title</span>
                <span className={styles.ArtistName}>Artist Name</span>
                
                <button 
                className={styles.PlayButton} 
                type="button">
                Play
                </button>

                <button 
                className={styles.AddToPlaylistButton} 
                type="button">
                Save to Playlist
                </button>

            </div>
            <hr className={styles.Line}/>
        </div>    
    )
};

export default SearchResult;