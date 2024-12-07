import React from 'react';
import "../styles/Realisations.css";
import Card from "../components/Card";

const Realisations = () => {
    return (
        <section className="portfolio">
        <img src="./images/img2.jpg" alt=""></img>
        <h3>Portfolio</h3>
        <p>Voici quelques unes de mes réalisation</p>
        <hr />
        <div className="portfoliocard">
        <Card />
        </div>
        </section>
        
    );
};

export default Realisations;