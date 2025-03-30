import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { movieActions } from "../store/movieSlice";
import "./Header.css";

const Header = () => {
  const inputRef = useRef();
  const [searchClicked, setSearchClicked] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setSearchClicked(true);
  };

  return (
    <div className="app-header">
      <h2>Trending Movies</h2>
      <div className="nav-btns">
        <ul>
          <li>Filter</li>
          <li>Favourites</li>
        </ul>
      </div>
      <div className="search">
        <input
          className={searchClicked ? "show-input" : ""}
          ref={inputRef}
          type="text"
          placeholder="Search Movies..."
          onChange={(e) => {
            console.log("Onchange triggered");
            dispatch(movieActions.searchMovie(e.target.value));
          }}
        />
        {!searchClicked && (
          <button className="btn-search" onClick={clickHandler}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
