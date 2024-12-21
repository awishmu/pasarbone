// https://dev.to/ivadyhabimana/customizing-swiperjs-prevnext-arrow-buttons-and-pagination-bullets-in-react-3gkh


"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle";
register();

export default function SliderPage() {
	const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      // pagination: true,
    };
	
	// These are new...
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }
          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
      `,
      ],
	

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);


	return (
 		 <swiper-container ref={swiperRef} init="false"> 
		  <swiper-slide class="blue-slide">Slide 1</swiper-slide>
		  <swiper-slide class="yellow-slide">Slide 2</swiper-slide>
		  <swiper-slide class="green-slide">Slide 3</swiper-slide>
		</swiper-container>
	)
}
