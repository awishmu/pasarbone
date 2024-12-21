"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import './styles.css';

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import telurHeroPic from '/public/pictures/IMG20241116122934.jpg';
import telurHeroPic2 from '/public/pictures/IMG20231225090919.jpg';
import telurHeroPic3 from '/public/pictures/IMG20241108054651.jpg';


export default function Sliderpage() {
	 
	return (
	<>
	{/* -- Slider main container -- */}
				<Swiper
 				    modules={[Navigation, Pagination, Scrollbar, A11y]}
					navigation
					  pagination={{ clickable: true }}
					  scrollbar={{ draggable: true }}
				  onSlideChange={() => console.log('slide change')}
				  onSwiper={(swiper) => console.log(swiper)} 
				>
				  <SwiperSlide className="swiper--slide--item">				  
					<div className="w-full bg-lime-200">
						<h1>Ayam Kampung Asli</h1>
						<Image
								src={telurHeroPic} 
								alt="img-telur"
								width={100}
								height={100}
							/>
						
					</div>
				  </SwiperSlide>
				  <SwiperSlide>Slide 2</SwiperSlide>
				  <SwiperSlide>Slide 3</SwiperSlide>
				  <SwiperSlide>Slide 4</SwiperSlide>
				  <SwiperSlide>Slide 5</SwiperSlide>
				  <SwiperSlide>
						<div className="slide-item relative">	
							<div className="content-hero relative border-2 border-blue-400  top-0 z-20 relative mx-auto max-w-screen-xl py-6 px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
								<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
									<h5 className="text-lg font-extrabold block text-rose-500 sm:text-lg my-4">Produk Unggulan</h5>
									<h1 className="text-3xl font-extrabold text-white sm:text-5xl">Telur Ayam Kampung</h1>
									<p className="mt-4 max-w-lg text-white sm:text-xl/relaxed mx-auto">
										Sering dimanfaatkan sebagai obat alami, penambah stamina, dan pemeliharan kesehatan.
									</p>
									<div className="button-wrap mt-8 flex flex-wrap justify-center gap-4 mx-auto w-full">
										<Link 
											href="#"
											className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
										>
											Shop Now
										</Link> 
									</div>
								</div>
							</div>
							<div
								className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
							></div>
							<div className="image-bg absolute top-0 z-10 w-full h-full">
								<Image
									src={telurHeroPic} 
									alt="img-telur"
									fill
									style={{ 
											objectFit: 'cover'
										}}
								/>
							</div>
						</div>{/* End Hero Item 1*/} 
				  </SwiperSlide>
				</Swiper>
			  
	</>
	)
}