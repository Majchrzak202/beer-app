import React from "react";
import BeerItem from "./BeerItem";
import { Link } from "react-router-dom";

import "./BeerList.css";

const BeerList = ({ beers }) => {
  if (beers.length === 0) {
    return null;
  }

  console.log(beers);

  return (
    <div className="beer-list">
      <div className="line"></div>
      <ul>
        {beers.map((beer) => (
          
          <Link key={beer.id} to={`/beer/${beer.id}`}>
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
