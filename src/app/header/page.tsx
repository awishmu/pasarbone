"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useState } from 'react';
import { Brain } from 'lucide-react';
import { Menu } from 'lucide-react';
import { navigation } from "@/constants";
import { HamburgerMenu } from "./design/Header";


export default function HeaderPage() {
	
	const pathname = usePathname();
	const [openNavMenu, setOpenNavMenu] = useState(false);
	
	const toggleNavMenu = () => {
		if (openNavMenu) {
		  setOpenNavMenu(false);
 		} else {
		  setOpenNavMenu(true);
 		}
	  };

	const handleClick = () => {
		if (!openNavMenu) return;

		setOpenNavMenu(false);
	};


	
  return (
  <>
		<div className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b`}>
			<nav className="w-full flex items-center justify-between">		
				<Link className="w-[12rem] xl:mr-0" href="#hero" >
					<Brain />			 
				</Link>
				<div
					  className={`${
						openNavMenu ? "flex" : "hidden"
					  } relative top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
				>
					  <div className="min-w-[400px] border-rose-200 border-2 absolute top-20 md:top-0 md:relative z-10 overflow-y-auto flex flex-col items-center justify-center m-auto md:flex-row">
						{navigation.map((item) => (
						  <a
							key={item.id}
							href={item.url}
							onClick={handleClick}
							className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
							  item.onlyMobile ? "lg:hidden" : ""
							} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
							  item.url === pathname
								? "z-2 lg:text-n-1"
								: "lg:text-n-1/50"
							} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
						  >
							{item.title}
						  </a>
						))}
					  </div>
						 
					  
				</div>
				<button
				  className="ml-auto md:hidden z-20"
				  px="px-3"
				  onClick={toggleNavMenu}
				>
					<Menu className=" text-gray-100" />	
				</button>
				<Link 
					href="#signup"
					className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
				>
					New account
				</Link>
				<Link className="hidden lg:flex " href="#login">
					Sign in
				</Link>
			</nav>
		</div>
	 </>
  );
}

