import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({fetchBeers}) => {
  const [input, setInput] = useState("");

  const searchInputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return 
    }
    fetchBeers(input)
    setInput('')

  };

  return (
    <div className="form">
      <h3>
        This is <span style={{ color: "orange" }}>BEER WORLD</span> <br />
        Just search any Beer in the World!
      </h3>
      <form>
        <div className="input">
          <input value={input} onChange={searchInputHandler} type="text" />
        </div>
        <div className="form-button">
          <button onClick={submitHandler} className="button">SEARCH BEER </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
