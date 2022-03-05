import React from 'react'
import './Search.css'

export default function Search({search, searchInput, handleSearch }) {
    return (
        <div className="Search">
            <input type="text" value={search} ref={searchInput} onChange={handleSearch} placeholder="Bucar personaje..."/>
        </div>
    )
}
