import React, { useState } from 'react';
import './itunes.scss'

const Search = ({ setSearch }) => {

    const [text, newText] = useState()

    const onSubmit = (e) => {
        e.preventDefault();

        setSearch(text)
    }

    return (
        <div className='search'>
            <form onSubmit={onSubmit}>
                <input className='textbox' onChange={(e) => newText(e.target.value)}></input>
                <button className="button">Search</button>
            </form>
        </div>
    );
};

export default Search;