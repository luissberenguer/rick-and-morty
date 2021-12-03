import React, { useState, useEffect, useReducer } from 'react'
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

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data?.results))
    }, [])

    const handleClick = favorite => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
    }
    
    return (
        <div className="Characters">
            {favorites.favorites.map(favorite => (
                    <li key={favorite.id}>
                        {favorite.name}
                    </li>
            ))}

            {characters.map(character => (
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
    )
}

export default Characters
