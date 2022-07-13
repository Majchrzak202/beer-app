import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Typography } from "@material-ui/core";

const BeerPage = () => {
  const [beer, setBeer] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBeer = async () => {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data = await response.json();
      setBeer(data);
    };

    fetchBeer();
  }, [id]);

  if (typeof beer === "undefined") {
    return null;
  }
  const name = beer[0].name;
  const description = beer[0].description;

  return (
    <div>
      <Card variant="outlined">
        <Typography>
          {name}
        </Typography>
      </Card>
      <div>
       
        {description}
      </div>
      <button onClick={() => navigate("/")}>GO BACK</button>
    </div>
  );
};

export default BeerPage;
