import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/search/SearchBar";
import BeerList from "./components/beer/BeerList";
import "./App.css";

const api = {
  base: "https://api.punkapi.com/v2/beers",
};

const App = () => {
  const [beers, setBeers] = useState([]);

  const fetchBeers = async (search) => {
    const response = await fetch(`${api.base}?beer_name=${search}&per_page=80`);
    const data = await response.json();
    setBeers(data);
  };

  return (
    <div>
      <Navbar />
      <div className="App">
        <SearchBar fetchBeers={fetchBeers} />
        <BeerList beers={beers} />
      </div>
    </div>
  );
};

export default App;
