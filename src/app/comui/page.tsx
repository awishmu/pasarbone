"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Area from "@/components/Area";
import Footer from "@/components/Footer";

import PBCLogo from '/public/pbc_logo.png'

export default function Navbar() {
	
const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
	<>
		<div className="w-full h-20 bg-emerald-800 sticky top-0">
			<div className="container mx-auto px-4 h-full">
			  <div className="flex justify-between items-center h-full">
				<Image src={PBCLogo} alt={'PBCLogo'} width={50} height={50} />
				<button
				  type="button"
				  className="inline-flex items-center md:hidden"
				  onClick={toggle}
				>
				  <svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
				  >
					<path
					  fill="#fff"
					  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
					/>
				  </svg>
				</button>
				<ul className="hidden md:flex gap-x-6 text-white">
				  <li>
					<Link href="/about">
					  <p>About Us</p>
					</Link>
				  </li>
				  <li>
					<Link href="/services">
					  <p>Services</p>
					</Link>
				  </li>
				  <li>
					<Link href="/contacts">
					  <p>Contacts</p>
					</Link>
				  </li>
				</ul>
				<div className="hidden md:block">
					<button className="h-12 rounded-lg bg-white font-bold px-5">Sign In</button>
				</div>
			  </div>
			</div>
		</div>

	
	</>
  );
}
