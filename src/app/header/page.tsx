"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { useState } from 'react';
import { Brain } from 'lucide-react';
import { Menu } from 'lucide-react';
import { navigation } from "@/constants";


export default function HeaderPage() {
	
	const pathname = usePathname();
	const [openNavigation, setOpenNavigation] = useState(false);
	
	const toggleNavigation = () => {
		if (openNavigation) {
		  setOpenNavigation(false);
 		} else {
		  setOpenNavigation(true);
 		}
	  };

	  const handleClick = () => {
		if (!openNavigation) return;

		enablePageScroll();
		setOpenNavigation(false);
	  };

	
  return (
  <>
		<div className={`fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
			<div className="flex items-center px-5 lg:px7.5 xl:px-10 max-lg:py-4">		
				<Link className="block w-[12rem] xl:mr-0" href="#hero" >
					<Brain />			 
				</Link>
				<nav className={`${openNavigation ? "flex" : "hidden" } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>			
					<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
						{navigation.map((item) => (
							<Link
								key={item.id}
								href={item.url}
								onClick={handleClick}
								className={`block relative font-code text-2xl uppecase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
							>
								{item.title}
							</Link>
						))}
					</div>
					<Menu />
				</nav>
				<Link 
					href="#signup"
					className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
				>
					New account
				</Link>
				<Link className="hidden lg:flex " href="#login">
					Sign in
				</Link>
			</div>
		</div>
		
	 </>
  );
}
