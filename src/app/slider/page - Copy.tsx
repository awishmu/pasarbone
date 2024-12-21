"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import '../swiper-styles.css';


export default function SliderPage() {
	
// init Swiper:
// const swiper = new Swiper(...);
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


	return (
 		<Swiper
		  spaceBetween={50}
		  slidesPerView={3}
		  onSlideChange={() => console.log('slide change')}
		  onSwiper={(swiper) => console.log(swiper)}
		  navigation={true} modules={[Navigation]}
		>
		  <SwiperSlide className="w-full">Slide 1</SwiperSlide>
		  <SwiperSlide className="w-full">Slide 2</SwiperSlide>
		  <SwiperSlide className="w-full">Slide 3</SwiperSlide>
		  <SwiperSlide className="w-full">Slide 4</SwiperSlide>
 		</Swiper>
	)
}
