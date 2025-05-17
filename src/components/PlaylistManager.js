import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import styles from './Playlist.module.css';

function Playlist() {

    return (
        <div>
            <h2>Your Playlists</h2>
            <button className="CreatePlaylist" type="button">New Playlist</button>
            <div className="Playlists">
                <div className="Playlist">
                    <p>Song Title</p>
                    <button className="OpenPlaylist" type="button">Open Playlist</button>
                </div>

                <div className="Playlist">
                    <p>Song Title</p>
                    <button className="OpenPlaylist" type="button">Open Playlist</button>
                </div>

                <div className="Playlist">
                    <p>Song Title</p>
                    <button className="OpenPlaylist" type="button">Open Playlist</button>
                </div>

            </div>
                       




        </div>
    )

};

export default Playlist;