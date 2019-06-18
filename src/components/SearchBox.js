import React from "react";

const SearchBox = ({ SearchChange }) => {
    return (
        <div className='pa2'>
            <input 
                label="search-robot"
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="search robots" 
                onChange={SearchChange}
            />
        </div>
    );
};

export default SearchBox;
