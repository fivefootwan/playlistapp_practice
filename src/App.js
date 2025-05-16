import './App.css';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import SpotifyLogin from './components/SpotifyLogin';
import Callback from './components/Callback';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  function handleSearch(term) {
    console.log("Received in App:", term);
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
                <SearchResult />
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
