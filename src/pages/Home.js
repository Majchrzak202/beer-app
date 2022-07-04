import React from "react";
import BeerList from "../components/beer/BeerList";
import SearchBar from "../components/search/SearchBar";


const Home = ({beers, fetchBeers}) => {
    return <div>
        <SearchBar fetchBeers={fetchBeers}/>
        <BeerList beers={beers}/>
    </div>
}


export default Home;