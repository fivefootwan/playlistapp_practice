import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Playlist from "./components/Playlist";
import SpotifyLogin from './components/SpotifyLogin';
import Callback from './Callback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // ✅ add this

function App() {
  const [searchResults, setSearchResults] = useState([]); // ✅ step 1

  function handleSearch(term) {
    console.log("Received in App:", term);
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
        console.log("🎵 Search Results:", data.tracks.items);
        setSearchResults(data.tracks.items); // ✅ step 2
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
              <div><SpotifyLogin /></div>
              <header>
                <SearchBar onSearch={handleSearch} />
              </header>
              <div className="App-Body">
                <SearchResult tracks={searchResults} /> {/* ✅ step 3 */}
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
