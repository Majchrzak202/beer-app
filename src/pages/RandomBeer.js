import React, { useState } from "react";
import "./RandomBeer.css";
import { Link } from "react-router-dom";

const api = {
  base: "https://api.punkapi.com/v2/beers/random",
};

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState();

  const fetchRandomBeer = async () => {
    const response = await fetch(api.base);
    const result = await response.json();
    console.log(result);
    setRandomBeer(result);
  };

  return (
    <div className="random-beer">
        <h2>Looking for inspiration? Randomly find Beer!</h2>
      <button onClick={fetchRandomBeer} className="random-beer-button">
        Find Random BEER!
      </button>
      {randomBeer && (
        <div className="beer-item">
          <img alt={randomBeer[0].id} src={randomBeer[0].image_url} />
          <div className="beername">
            <h3>{randomBeer[0].name}</h3>
            <p>{randomBeer[0].tagline}</p>
          </div>
          <div className="beer-data">
            <div className="beer-ibuabv">
              <p className="abv">{randomBeer[0].abv}% ABV</p>
              <p className="ibu">{randomBeer[0].ibu} IBU</p>
            </div>
            <div className="beerbuttondiv">
              {
                <Link to={`/beer/${randomBeer[0].id}`}>
                  <button className="beerbutton">More info</button>
                </Link>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomBeer;
