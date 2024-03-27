import React from 'react';
import './Footer.css';
import { FaHome } from "react-icons/fa";
import Insta from './instagram.png';
import Fb from './facebook.png';
import In from './linkedin.png';
import Twitter from './twitter.png';

const Footer = () => {
  return (
    <section className='footer mt-5'>
        <div className="footer-left py-5">
        <FaHome size={40} className='mx-5' style={{color: 'lightskyblue'}}/>
        <h1 className='footer-heading mx-5'>Homigo</h1>
        <div className='mx-5'><p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi quod doloribus tempora dolor repellendus enim autem aliquam perferendis delectus deserunt voluptas iusto ad nobis sed itaque harum, cupiditate animi id magni, est facilis ipsam!
        </p></div>
        </div>
        <div className="footer-mid">
        <h1 className="footer-heading">Quick Links</h1>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Careers</li>
        </div>
        <div className="footer-right mx-5">
            <h1 className="footer-heading">Get Social With Us</h1>
            <div className='footer-icons'>
                <img src={Insta} alt="insta" />
                <img src={Fb} alt="FaceBook" />
                <img src={In} alt="LinkedIn" />
                <img src={Twitter} alt="Twitter" />
            </div>
        </div>
    </section>
  )
}

export default Footer;