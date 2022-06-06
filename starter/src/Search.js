import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = (props) => {  
  return (
    <div className="app">
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <div className="close-search">Close</div>
          </Link>

          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title, author, or ISBN" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
