import React from 'react';
import './Resedency.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from './data.json';
import { SliderSetting } from './SliderSetting';
import SliderButton from './SliderBtn';

const Resedency = () => {
  return (
    <section className="resedencies container py-4">
    <h5 style={{color: "#f96400", fontSize: "1.6rem", fontWeight: "600"}}>Best Choices</h5>
    <h2 className='mb-5 resedency'>Popular Resedencies</h2>
    <div>
        <Swiper {...SliderSetting}>
            <SliderButton/>
            {
                data.map((data, i) => (
                    <SwiperSlide key={i} className='my-5'>
                        <div className="r-card">
                            <img src={data.image} alt="img" />
                            <h4 className='price pt-3'><span style={{color: "orangered"}}>$</span>{data.price}</h4>
                            <h3 className="name">{data.name}</h3>
                            <p className="detail">{data.detail}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
    </section>
  )
}

export default Resedency;