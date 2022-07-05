import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BeerPage = () => {
  const [beer, setBeer] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchBeer = async () => {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data = await response.json();
      setBeer(data);
      console.log(data);
    };

    fetchBeer();
  }, [id]);

  if (typeof beer === "undefined") {
    return null;
  }
  const name = beer[0].name;
  const description = beer[0].description;

  return <div>{name}{description}</div>;
  /* if (typeof beer === "undefined") {
    return null;
  } else {
    return (
      <div>
        {beer[0].name} <br />
        {beer[0].abv}
      </div>
    );
  } */
};

export default BeerPage;
