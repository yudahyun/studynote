import React from 'react';
import Map from "../img/map.jpg";
const Footer = () => {
    return (
        <div>
             <section>
            <img class="last-img max-with margin-auto" src={Map} alt=""/>
        </section>
        <footer class="normal-padding">
            <p class="normal-padding">Powered by <a class="footer-link">w3.css</a></p>
        </footer>
        </div>
    );
};

export default Footer;