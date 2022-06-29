import React from "react";
import './BeerItem.css'

const BeerItem = ({name, abv, ibu, img, id, tagline}) => {
    return (<li>
        <div className="beer-item">
          <img alt={id} src={img} />
          <div className="beername">
            <h3>{name}</h3>
            <p>{tagline}</p>
          </div>
          <div className="beer-data">
            <div className="beer-ibuabv" >
              <p className="abv">{abv}% ABV</p>
              <p className="ibu">{ibu} IBU</p>
            </div>
            <div>
              <p className="rating">Ocena 5/5</p>
            </div>
          </div>
        </div>
      </li>)
}

export default BeerItem; 