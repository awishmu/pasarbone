"use client"

import React, { useRef, useState } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Page() {
	
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