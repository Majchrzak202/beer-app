import React, { useState, lazy, Suspense } from "react";
import "./App.css";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
/* import RandomBeer from "./pages/RandomBeer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BeerPage from "./components/beer/BeerPage";
import ThankYou from "./pages/ThankYou"; */

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const About =  lazy(() => import("./pages/About"))
const RandomBeer = lazy (() => import("./pages/RandomBeer"))
const Contact = lazy(() => import("./pages/Contact"))
const BeerPage = lazy(() => import("./components/beer/BeerPage"))
const ThankYou = lazy(() => import("./pages/ThankYou"))

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
        <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route
            path="/"
            element={<Home fetchBeers={fetchBeers} beers={beers} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/randombeer" element={<RandomBeer />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/thank" element={<ThankYou />}></Route>
          <Route path="/beer/:id" element={<BeerPage />}></Route>
        </Routes>
        </Suspense>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
