import React from "react";

const SearchBox = ({ searchFiled, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                key='searchBar'
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;