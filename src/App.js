import React from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/search/SearchBar";
import BeerList from "./components/beer/BeerList";


const api = {
  base: "https://api.punkapi.com/v2/beers",
};

const App = () => {
  const fetchBeers = async (search) => {
    const response = await fetch(`${api.base}?beer_name=${search}&per_page=80`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <Navbar />
      <SearchBar fetchBeers={fetchBeers} />
      <BeerList />
      <button onClick={fetchBeers}>FETCH</button>
    </div>
  );
};

export default App;
