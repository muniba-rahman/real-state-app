import React from 'react';
import { useSwiper } from 'swiper/react';

const SliderBtn = () => {
    const swiper = useSwiper();
  return (
    <div className="slider-btn">
        <button onClick={()=>{swiper.slidePrev()}}>&lt;</button>
        <button onClick={()=>{swiper.slideNext()}}>&gt;</button>
    </div>
  )
}

export default SliderBtn;