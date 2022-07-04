import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BeerPage from "./components/beer/BeerPage";
import ThankYou from "./pages/ThankYou";

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
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home fetchBeers={fetchBeers} beers={beers} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/randombeer" element={<RandomBeer />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path='/thank' element={<ThankYou/>}></Route>
          <Route path="/beer/:id" element={<BeerPage beers={beers} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
