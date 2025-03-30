import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { movieActions } from "../store/movieSlice";
import "./Header.css";

const Header = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const dispatch = useDispatch();

  const clickHandler = () => {
    console.log("setting to true");
    setSearchClicked(true);
  };

  return (
    <div className="app-header">
      <h2>Trending Movies</h2>
      <div className="search">
        <input
          className={searchClicked ? "show-input" : ""}
          type="text"
          placeholder="Search Movies..."
          onChange={(e) => {
            console.log("Onchange triggered");
            dispatch(movieActions.searchMovie(e.target.value));
          }}
        />
        <button className="btn-search" onClick={clickHandler}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
