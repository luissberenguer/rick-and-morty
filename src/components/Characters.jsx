import React, { useState, useEffect, useReducer, useMemo } from 'react'
import './Characters.css'

const initialState = {
    favorites: [],
}

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

function Characters() {

    const [characters, setCharacters] = useState([]);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data?.results))
    }, [])

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const filteredUsers = useMemo(() => (
        characters.filter((user) => {
            return user.name.toLowerCase().includes(search.toLowerCase())
        })),
        [characters, search]
    )
    
    return (
        <React.Fragment>
            <div className="Search">
            <input type="text" value={search} onChange={handleSearch} />
            </div>

            <div className="favorites-container">
            {favorites.favorites.map(favorite => (
                        <li key={favorite.id}>
                            {favorite.name}
                        </li>
                ))}
            </div>

        
            <div className="Characters">
                

            {filteredUsers.map(character => (
            <div className="character-cointainer" key={character}>
                <img className="character-image" src={character?.image} alt={character?.name} />
                <h2>{character?.name}</h2>
                <p className="status">Status: {character?.status}</p>
                <p className="origin">Origin: {character?.origin?.name}</p>
                <p className="specie">Specie: {character?.species}</p>
                <button type="button" onClick={() => handleClick(character)}>Agregar a favoritos</button>
            </div>
            ))}
        </div>
        </React.Fragment>
    )
}

export default Characters
