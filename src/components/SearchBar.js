import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import styles from './SearchBar.module.css'

function SearchBar({onSearch}) {
    const [userInput, setUserInput] = useState('');

    // logInput updates the input state every time the user types, so React always knows the current value. handles real time update
    const logInput = (e) => { //2. Updates userInput state to match what's typed into the input.
        setUserInput(e.target.value)  // the value typed by the user (value) inside the input field (target) when a typing event (e) happens
    };

    // handles final action to submit
    function handleSearchInput(e) {
        e.preventDefault();
        onSearch(userInput) //← this sends the data to App
    };

    return (
        <div className={styles.container}>
            <form 
            onSubmit={handleSearchInput}
            className={styles.form}>
                <input 
                placeholder='Enter song name or artist' 
                // dont do this -> style={{ width:'350px' }} <- it will override .css
                onChange={logInput} //1. onChange triggers logInput every time the user types, which updates the userInput state.
                value={userInput}
                className={styles.input}
                ></input> 
                <button type='submit' className={styles.button} >Search</button>
            </form>
            
        </div>);
}

export default SearchBar;
