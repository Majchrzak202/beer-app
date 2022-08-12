import React, { useState, useEffect } from "react";
import BeerItem from "./BeerItem";
import { Link } from "react-router-dom";

import "./BeerList.css";

const BeerList = ({ beers }) => {
  const [status, setStatus] = useState("Most Popular");
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "Most Popular":
          setFilteredBeers(beers);
          break;
        case "Lowest ABV":
          setFilteredBeers([...beers].sort((a, b) => a.abv - b.abv));
          break;
        case "Lowest IBU":
          setFilteredBeers([...beers].sort((a, b) => a.ibu - b.ibu));
          break;
        case "Highest ABV":
          setFilteredBeers([...beers].sort((a, b) => b.abv - a.abv));
          break;
        case "Highest IBU":
          setFilteredBeers([...beers].sort((a, b) => b.ibu - a.ibu));
          break;
        default:
          setFilteredBeers(beers);
          break;
      }
    };
    filterHandler();
  }, [status, beers]);

  if (beers.length === 0) {
    return null;
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="beer-list">
      <div>
        Sort by :
        <select onChange={statusHandler}>
          <option>Most Popular</option>
          <option>Lowest ABV</option>
          <option>Lowest IBU</option>
          <option>Highest ABV</option>
          <option>Highest IBU</option>
        </select>
      </div>
      <div className="line"></div>
      <ul>
        {filteredBeers.map((beer) => (
          <Link style={{ textDecoration: 'none', color:'black' }} key={beer.id} to={`/beer/${beer.id}`}>
            <BeerItem
              name={beer.name}
              abv={beer.abv}
              ibu={beer.ibu}
              key={beer.id}
              img={beer["image_url"]}
              id={beer.id}
              tagline={beer.tagline}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BeerList;
