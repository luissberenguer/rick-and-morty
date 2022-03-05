import React, {useState,  useContext } from 'react'
import './Header.css'
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    // const [darkMode, setDarkMode] = useState(false);
    const color = useContext(ThemeContext);

    // const handleClick = () => {
    //     setDarkMode(!darkMode);
    // }

    return (
        <div className="Header">
            <h1 className='header--title' style={{color}}>Rick and Morty</h1>
            {/* <button
                className={`DarkMode-button ${darkMode ? "darkMode" : "lightMode"}`}
                type="button"
                onClick={handleClick}
            >{darkMode ? 'Dark Mode' : 'Light Mode'}</button> */}
        </div>
    );
}

export default Header