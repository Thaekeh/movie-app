import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("Man");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input className="search-button" onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;