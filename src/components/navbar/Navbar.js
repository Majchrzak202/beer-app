import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import beerLogo from "../../assets/beerLogo.png"

const Navbar = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <img className="brand" src={beerLogo} alt="1" />
      <button
        onClick={() => {
          setNavExpanded(!navExpanded);
        }}
        className="hamburger"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={navExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul >
          <li><Link className="link" to={'/'}>Home</Link></li>
          <li><Link className="link" to={'/about'}>About</Link></li>
          <li><Link className="link" to={'/contact'}>Contact</Link></li>
          <li><Link className="link" to={'/randombeer'}>Random Beer</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
