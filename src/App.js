import React from "react";
import Navbar from "./components/navbar/Navbar";
import SearchBar from "./components/search/SearchBar";
import BeerList from "./components/beer/BeerList";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <BeerList/>
    </div>
  );
}

export default App;
