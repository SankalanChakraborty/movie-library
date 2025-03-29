import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="app-header">
      <h2>Trending Movies</h2>
      <button className="btn-search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Header;
