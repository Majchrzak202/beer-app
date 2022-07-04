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
          <BeerItem
            name={beer.name}
            abv={beer.abv}
            ibu={beer.ibu}
            key={beer.id}
            img={beer['image_url']}
            id={beer.id}
            tagline={beer.tagline}
          >
            <Link to={`/beer/${beer.id}`}></Link>
          </BeerItem>
        ))}
      </ul>
    </div>
  );
};

export default BeerList;
