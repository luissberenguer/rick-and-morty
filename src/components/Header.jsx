import React, {useState,  useContext } from 'react'
import './Header.css'
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const color = useContext(ThemeContext);

    const handleClick = () => {
        setDarkMode(!darkMode);
        // if (darkMode) {            
        //     return (
        //         <style>
        //             body {
        //                 color
        //             }
        //         </style>
        //     )
        // }
    }

    return (
        <div className="Header">
            <h1 style={{color}}>Rick and Morty</h1>
            <button
                className="DarkMode-button"
                type="button"
                onClick={handleClick}
            >{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
        </div>
    );
}

export default Header