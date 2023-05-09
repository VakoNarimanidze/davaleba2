import microsoft from '../../Components/images/microsoft.png'
import google from '../../Components/images/google.png'
import firefox from '../../Components/images/firefox.png'
import safari from '../../Components/images/safari.png'
import './SecondSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';


export default function SecondSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="div">
      <h2>Our Partner</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={microsoft} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={google} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={firefox} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={safari} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={microsoft} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={google} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={firefox} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={safari} alt="" />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>

  );
}
