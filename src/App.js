import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar.js';

function App() {

  //handleSearch: callback function, receives 'term' (search input value from SearchBar), this func gets passed donw to SearchBar via props
  function handleSearch(term) {
    console.log("Received in App:", term);
    // Later: trigger Spotify search here
  }

  return (
    <div className="App">
      <header>
        <SearchBar onSearch={handleSearch} />
        
      </header>
    </div>
  );
}

export default App;
