import React, { useState } from 'react';
import './Value.css';
import { Accordion,AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import acdata from './AccordionData';
import valuePic from './value.png';
import { motion } from 'framer-motion';

const Value = () => {
    const [className, setClassName] = useState(null);
  return (
    <>
    <motion.h1 className=' text-center heading'
    initial={{ y:50, opacity:0 }}
        whileInView={{y:0, opacity:1}}
        transition={{
          delay:0.2,
          y: {type: "spring", stiffness: 50},
          opacity: {duration: 0.2},
          ease: "easeIn",
          duration:1
        }}>Our Values, Our Priority</motion.h1>
            <hr className="line mx-auto my-3" />
    <section className="value my-5 mx-5 py-5 px-5">

        <motion.div className="left-container"
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 1, opacity:1}}
        transition={{delay: 0.3, x:{type: "spring", stiffness: 30}, opacity:{duration:1}, ease: "easeIn", duration:1}}>
            <img src={valuePic} alt="img" />
        </motion.div>

        <motion.div className="right-container"
        initial={{x: 100, opacity: 0}}
        whileInView={{x: 0, opacity:1}}
        transition={{delay: 0.3, x:{type: "spring", stiffness: 30}, opacity:{duration:1}, ease: "easeIn", duration:1}}>

            <Accordion
            allowMultipleExpanded={false}
            preExpanded={[0]}
            className='accordion-container'
            >
                {
                    acdata.map((item, i)=>{
                        return(
                            <AccordionItem key={i}
                                style={{
                                    border: "1px solid rgba(128, 128, 128, 0.143)",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    background: "white"
                                }} className={`acc-item ${className}`}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    <AccordionItemState>
                                        {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed") }
                                    </AccordionItemState>
                                        <span className='acc-heading'>{item.heading}</span>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    {item.answer}
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
        </motion.div>

    </section>
    </>
  )
}

export default Value;