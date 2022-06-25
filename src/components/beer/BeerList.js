import React from "react";

import "./BeerList.css";

const BeerList = () => {
  return (
    <div className="beer-list-section">
      <div className="line"></div>
      <ul>
        <li>
          <div className="beer-item">
            <img />
            <div>
              <h3>Corona Export</h3>
              <p>Pyszne piwko Koronka</p>
            </div>
            <div>
              <div>
                <p>4,5% ABV</p>
                <p>18 IBU</p>
              </div>
              <div>
                <p>Ocena 5/5</p>
              </div>
            </div>
          </div>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default BeerList;
