import React from "react";
import "./search.css"

function Search() {
  return (
    <div className="search">
      <input
        type="text"
        id="search_specs"
        placeholder="What are you looking for?"
      />
    </div>
  );
}

export default Search;
