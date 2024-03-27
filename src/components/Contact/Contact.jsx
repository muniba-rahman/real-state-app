import React from 'react';
import './Contact.css';
import { FcCallback } from "react-icons/fc";
import { BsFillChatDotsFill } from "react-icons/bs";
import { SiGooglemeet } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
    <motion.h1 className="heading text-center mb-4 mt-5 pt-5"
    initial={{ y:50, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:0.2,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }}>Contact Us Now</motion.h1>
    <hr className="line" />
    <section className="contact container my-5">
        <div className="left-section">
          <motion.div className="inner-container"
          initial={{ y:50, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:0.2,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }}>
                <div className="contact-box">
                  <FcCallback className='box-icon'/>
                  <div className='mx-3'>
                    <h4>Call</h4>
                    <h5>0213-111111</h5>
                    <button className='contact-btn my-2'>Call Now</button>
                  </div>
                </div>
                <div className="contact-box">
                  <BsFillChatDotsFill className='box-icon'/>
                  <div className='mx-3'>
                    <h4>Message</h4>
                    <h5>0213-111111</h5>
                    <button className='contact-btn my-2'>Start Chat</button>
                  </div>
                </div>
              </motion.div>
          <motion.div className="inner-container"
          initial={{ y:50, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:0.2,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }}>
                <div className="contact-box">
                  <SiGooglemeet className='box-icon'/>
                  <div className='mx-3'>
                    <h4>Google Meet</h4>
                    <button className='contact-btn my-2'>Start Meet</button>
                  </div>
                </div>
                <div className="contact-box">
                  <MdEmail className='box-icon'/>
                  <div className='mx-3'>
                    <h4>Email</h4>
                    <h5>real.state@gmail.com</h5>
                    <button className='contact-btn my-2'>Email</button>
                  </div>
                </div>
              </motion.div>
        </div>
    </section>
    </>
  )
}

export default Contact;