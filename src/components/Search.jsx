import React from "react";
import "./Search.css";

function Search() {
  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload
    const query = e.target.searchbar.value;
    console.log("Search for:", query);
    // you can navigate or filter items here
  };

  return (
    <>
      <form id="sea-bar" onSubmit={handleSearch}>
        <input
          type="text"
          id="searchbar"
          name="searchbar"
          placeholder="Search for dishes or categories"
        />
        <label id="lbl" htmlFor="searchbar">
          Search
        </label>
      </form>
    </>
  );
}

export default Search;
