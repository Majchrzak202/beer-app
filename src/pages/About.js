import React from "react";
import './About.css'
import beerLogo from './../assets/beerLogo.png'

const About = () => {
    return <div className="about">
        <img src={beerLogo} alt='beerLogo' />
        <h3>This is an Educational purpose Beer App. It is made with React.</h3>
        <p>You can search ANY Beer in Database, filter by IBU, ABV and check all the deatils of this beer!</p>
        <p>Also check out food paring examples!</p>
    </div>
}


export default About;