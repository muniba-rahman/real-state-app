import React from 'react';
import './Partners.css';
import One from './company1.png';
import Two from './company2.png';
import Three from './company3.png';
import Four from './company4.png';
import { motion } from 'framer-motion';

const Partners = () => {
  return (
    <section className='partner-section py-5 my-5 px-2'>
        <motion.h1 className='text-center partners mt-4 mb-4'
       initial={{ y:50, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:0.2,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }}  >Our Partners</motion.h1>
        <hr className="line" />
        <div className="companies my-5 pt-5">
            <motion.img src={One} alt="img"
            initial={{ y:100, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:0.2,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }} />
            <motion.img src={Two} alt="img"
            initial={{ y:100, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:0.5,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }} />
            <motion.img src={Three} alt="img"
            initial={{ y:100, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:0.8,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }} />
            <motion.img src={Four} alt="img"
            initial={{ y:100, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:1,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }} />
        </div>
    </section>
  )
}

export default Partners;