// SearchBar.jsx
import React from "react";

const Searchbar = ({ searchText, setSearchText }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for biryani, pizza, shawarma..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default Searchbar;
