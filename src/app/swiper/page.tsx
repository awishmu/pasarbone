"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
export default function SwiperPage() {
// https://www.youtube.com/watch?v=O0N4Ona214g&t=11s
  return (
	<>
			   <Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					className="mySwipre"
				>
				  <SwiperSlide>Slide 1</SwiperSlide>
				  <SwiperSlide>Slide 2</SwiperSlide>
				  <SwiperSlide>Slide 3</SwiperSlide>
				  <SwiperSlide>Slide 4</SwiperSlide>
				</Swiper>
	</>
  );
}

