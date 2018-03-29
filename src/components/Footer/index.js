import React from 'react';
import envelope from '../../images/envelope.svg';
import linkedin from '../../images/linkedin.svg';
import './style.css';

console.log(envelope);

const Footer = () => (
  <footer role="contentinfo">      
    <a href="mailto:baron.roy@gmail.com" target="_blank"><img src={envelope} alt=""/></a>
    <a href="https://www.linkedin.com/in/roybarondeveloper/" target="_blank"><img src={linkedin} alt="" /></a>
    <a href="http://roysportfolio.website" target="_blank"><p>&#169; Roy's Portfolio Website</p></a>
  </footer>
);

export default Footer;
