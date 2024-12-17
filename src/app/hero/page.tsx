"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useState } from 'react';
import { Brain } from 'lucide-react';
import telurHeroPic from '/public/pictures/IMG20241116122934.jpg';
import telurHeroPic2 from '/public/pictures/IMG20231225090919.jpg';
import telurHeroPic3 from '/public/pictures/IMG20241108054651.jpg';

export default function HeroPage() {
	/*
	- Telur Ayam Kampung Segar
	- Telur Ayam Kampung Tetas
	- Karkas Ayam Kampung Asli
	- Anak Ayam Kampung / DOC
	- Ayam Kampung Organik
	*/
	
  return (
	<>
		<div className="hero-section">
			<h2>Hero component dipasang disini</h2>
			<div className="hero-slide-wrapper">
				<div className="slide-wrap flex flex-col gap-4">
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
					<div className="slide-item relative">	
						<div className="content-hero relative border-2 border-blue-400  top-0 z-20 relative mx-auto max-w-screen-xl py-6 px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
							<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
								<h5 className="text-lg font-extrabold block text-rose-500 sm:text-lg my-4">Produk Pilihan</h5>
								<h1 className="text-3xl font-extrabold text-white sm:text-5xl">Anak Ayam Kampung / DOC</h1>
								<p className="mt-4 max-w-lg text-white sm:text-xl/relaxed mx-auto">
									Memelihara anak ayam kampung akan menjadi hiburan dan merefreshing pikiran dari kepenatan, menjadi tambahan penghasilan dan kecukupan gizi keluarga. 
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
								src={telurHeroPic2} 
								alt="img-telur"
								fill
								style={{ 
										objectFit: 'cover'
									}}
							/>
						</div>
					</div>{/* End Hero Item 2*/} 
					<div className="slide-item relative">	
						<div className="content-hero relative border-2 border-blue-400  top-0 z-20 relative mx-auto max-w-screen-xl py-6 px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
							<div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
								<h5 className="text-lg font-extrabold block text-rose-500 sm:text-lg my-4">Produk Populer</h5>
								<h1 className="text-3xl font-extrabold text-white sm:text-5xl">Ayam Kampung Organik</h1>
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
								src={telurHeroPic3} 
								alt="img-telur"
								fill
								style={{ 
										objectFit: 'cover'
									}}
							/>
						</div>
					</div>{/* End Hero Item 3*/} 
				</div>
			</div>
		</div>
	</>
  );
}

