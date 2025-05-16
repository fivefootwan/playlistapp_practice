import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';
import SearchResult from './components/SearchResult.js'
import SpotifyLogin from './components/SpotifyLogin';


function App() {

  //handleSearch: callback function, receives 'term' (search input value from SearchBar), this func gets passed donw to SearchBar via props
  function handleSearch(term) {
    console.log("Received in App:", term);
    // Later: trigger Spotify search here
  }

  return (
    <div className="App">
      <div><SpotifyLogin /></div>
      <header>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className="App-Body">
      <SearchResult />
      

      </div>
    </div>
  );
}

export default App;
