import React from 'react';
import "../styles/Services.css";


const Services = () => {
    return (
        <section className="titleservices">
            <img src="./images/img2.jpg" alt=""></img>
            <h3>Mon offre de services</h3>
            <p>Voici les prestations sur lesquelles je peux intervenir</p>
            <hr />
        <article className="listeservices">
                <div className="liste1">
                <img src="./images/iconpc.png" alt="" />
                <h4>ux design</h4>
                <p>L'UX design est une méthode de conception centrée sur l'utilisateur. 
                Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                </div>
                <div className="liste2">
                <img src="./images/icondev.png" alt="" />
                <h4>développement web</h4>
                <p>Le développement de sites web repose sur l'utilisation des langages HTML,
                CSS, JavaScript et PHP.</p>
                </div>
                <div className="liste3">
                <img src="./images/iconseo.png" alt="" />
                <h4>Référencement</h4>
                <p>Le référenement naturel d'un site aussi appelé SEO,
                 consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs 
                 de recherche.</p>
                 </div>
        </article>
        </section>
    );
};

export default Services;