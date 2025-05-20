import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import PlaylistManager from "./components/PlaylistManager";
import SpotifyLogin from './components/SpotifyLogin';
import Callback from './Callback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlists, setPlaylists] = useState([]); // 

  const addPlaylist = (name) => { // ← NEW
    const newPlaylist = {
      id: Date.now(),
      name,
      tracks: []
    };
    setPlaylists(prev => [...prev, newPlaylist]);
  };

  const renamePlaylist = (playlistId, newName) => {
    setPlaylists(prev =>
      prev.map(pl =>
        pl.id === playlistId
          ? { ...pl, name: newName } // ← replace just the name
          : pl
      )
    );    

  }

  const addTrackToPlaylist = (track, playlistId) => { // ← NEW
    setPlaylists(prev =>
      prev.map(pl =>
        pl.id === playlistId
          ? { ...pl, tracks: [...pl.tracks, track] }
          : pl
      )
    );
  };

  const removeTrackFromPlaylist = (trackIndex, playlistId) => {
    setPlaylists(prev =>
      prev.map(pl =>
        pl.id === playlistId
          ? {
              ...pl,
              tracks: pl.tracks.filter((_, i) => i !== trackIndex), // remove one track
            }
          : pl
      )
    );
  };

  function handleSearch(term) {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      console.error("No access token — please log in to Spotify.");
      return;
    }

    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(term)}&type=track`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setSearchResults(data.tracks.items);
      })
      .catch(err => {
        console.error("Spotify search failed", err);
      });
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <SpotifyLogin />
              <SearchBar onSearch={handleSearch} />
              <div className="App-Body">
                <SearchResult
                  tracks={searchResults}
                  playlists={playlists} 
                  addTrackToPlaylist={addTrackToPlaylist} 
                />
                <PlaylistManager
                  playlists={playlists}
                  addPlaylist={addPlaylist}
                  onRemove={removeTrackFromPlaylist}
                  onRename={renamePlaylist}

                />
              </div>
            </div>
          }
        />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </Router>
  );
}

export default App;
