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

  const savePlaylistToSpotify = async (playlistId) => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      alert("You must log in to Spotify first.");
      return;
    }
  
    // Step 2: Find the playlist locally
    const playlist = playlists.find(pl => pl.id === playlistId);
    if (!playlist) {
      alert("Playlist not found.");
      return;
    }
  
    const trackUris = playlist.tracks.map(track => track.uri); // Step 2
  
    try {
      // Step 3: Get Spotify user ID
      const userRes = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + accessToken
        }
      });
  
      if (!userRes.ok) {
        throw new Error("Failed to fetch Spotify user info.");
      }
  
      const userData = await userRes.json();
      const userId = userData.id;
  
      // Step 4: Create new playlist on Spotify
      const createRes = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: playlist.name,
          public: false
        })
      });
  
      if (!createRes.ok) {
        throw new Error("Failed to create playlist on Spotify.");
      }
  
      const newPlaylist = await createRes.json();
      const newPlaylistId = newPlaylist.id;
  
      // Step 5: Add tracks to the new playlist
      const addTracksRes = await fetch(`https://api.spotify.com/v1/playlists/${newPlaylistId}/tracks`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uris: trackUris
        })
      });
  
      if (!addTracksRes.ok) {
        throw new Error("Failed to add tracks to new playlist.");
      }
  
      // Step 6: Done
      alert(`✅ Playlist "${playlist.name}" saved to Spotify!`);
    } catch (error) {
      console.error("Error saving playlist to Spotify:", error);
      alert("❌ Something went wrong while saving the playlist.");
    }
  };  


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
                  onSave={savePlaylistToSpotify} 

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
