import React from 'react';
import '../style/style.css';
import { Navigation,Autoplay,Pagination } from 'swiper';
import { useRef,useState } from 'react';
import {SwiperSlide,Swiper} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import im3 from '../img/im3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';
import img6 from '../img/img6.png';
import img7 from '../img/img7.png';
import img8 from '../img/img8.png';
import img9 from '../img/img9.png';


function Slider() {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <div className='container'>
        <div className='slider_swipe'>
              <Swiper navigation={true} modules={[Navigation,Autoplay,Pagination]} className="mySwiper"
              Pagination={{
                clickable:true,
              }}
              autoplay={{
                delay:2500,
                disableOnInteraction:false,
              }}>
                <SwiperSlide><img src={img1}/></SwiperSlide>
                <SwiperSlide><img src={img2}/></SwiperSlide>
                <SwiperSlide><img src={im3}/></SwiperSlide>
                <SwiperSlide><img src={img4}/></SwiperSlide>
                <SwiperSlide><img src={img5}/></SwiperSlide>
                <SwiperSlide><img src={img6}/></SwiperSlide>
                <SwiperSlide><img src={img7}/></SwiperSlide>
                <SwiperSlide><img src={img8}/></SwiperSlide>
                <SwiperSlide><img src={img9}/></SwiperSlide>
     
              </Swiper>
    
      </div>
    </div>
      
  )
}

export default Slider