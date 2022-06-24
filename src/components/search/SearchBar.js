import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="form">
        <h3>This is <span style={{color: 'orange'}}>BEER WORLD</span> <br/>
        Just search any Beer in the World!</h3>
      <form>
        <div className="input">
          <input type="text" />
        </div>
        <div className="form-button">
          <button className="button">SEARCH BEER </button>
        </div>
      </form>
    </div>
  );
};


export default SearchBar;