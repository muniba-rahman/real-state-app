import React from 'react';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import BannerPic from './banner.jpg';
import './Banner.css';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="banner mx-5">

        <div className="left-container mt-5">
            <motion.h1 className='mt-5 pt-4'
            initial={{x: -100, opacity: 0}}
        whileInView={{x: 1, opacity:1}}
        transition={{delay: 0.3, x:{type: "spring", stiffness: 30}, opacity:{duration:1}, ease: "easeIn", duration:1}}>Discover Your <br />
            <span className='banner-heading'>Dream Property</span> With Us</motion.h1>
            <h6 className='mt-4'> Explore an extensive range of properties tailored to meet your unique preferences and lifestyle.</h6>
            <div className="search-bar mt-4">
                <HiLocationMarker className='location' color='blue' size={25} />
                <input type="text" placeholder='search here'/>
                <button className='button'>search</button>
            </div>
            <motion.div className="stats mt-5"
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 1, opacity:1}}
            transition={{delay: 0.4, x:{type: "spring", stiffness: 30}, opacity:{duration:1}, ease: "easeIn", duration:2}}>
                <div className='mx-3'>
                    <h2 className='banner-heading'><CountUp start={8800} end={90000} duration={4}/><span className='plus'>+</span></h2>
                    <br/>
                    <h5>Apartments</h5>
                </div>
                <div className='mx-3'>
                    <h2 className='banner-heading'><CountUp start={1950} end={4589} duration={4}/><span className='plus'>+</span></h2>
                    <br/>
                    <h5>Penthouses</h5>
                </div>
                <div className='mx-3'>
                    <h2 className='banner-heading'><CountUp start={2500} end={3500} duration={4}/><span className='plus'>+</span></h2>
                    <br/>
                    <h5>Bunglows</h5>
                </div>
            </motion.div>
        </div>

        <div className="right-container mt-5" >
            <motion.img src={BannerPic} className='banner-pic' alt="img" 
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity:1}}
                transition={{delay: 0.2, x:{type: "spring", stiffness: 30}, opacity:{duration:1}, ease: "easeIn", duration:1}}
            />
        </div>

    </section>
  )
}

export default Banner;