"use client"
import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import { User } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

import PBCLogo from '/public/pbc_logo.png'
import { useState } from 'react';

const NavLinks = [
	{
		id: 1,
		name: "Products",
		link: "/products",
	},
	{
		id: 2,
		name: "Resep",
		link: "/#",
	}, 
	{
		id: 4,
		name: "About",
		link: "/about",
	}, 
]



export default function Navbar() {
	
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
		<nav className="bg-gray-950 shadow-sm w-full">
			<div className="container mx-auto flex justify-between" >
				<div className="w-full dark:text-gray-100 text-gray-100">
					<div className="relative w-full flex justify-between items-center">
							<div className="flex shrink-0 items-center py-4 ">
								<Link href="/"><Image src={PBCLogo} alt={'PBCLogo'} width={50} height={50} /></Link>
							</div>
						<div className="nav_main flex flex-1 items-center justify-center md:justify-between m-0">
							<div className={`nav_right ${
								openNavMenu ? "flex" : "hidden"
							  } relative lg:flex  flex-1 items-center justify-center sm:items-stretch sm:justify-start z-20`}
							>
								<ul className="flex flex-col lg:flex-row absolute lg:relative top-20 lg:top-0 left-0 z-20 w-full sm:ml-6 bg-gray-950">
										<li className="py-6 px-4 hover:bg-gray-700 flex gap-2"> 
											<Link href="/" className="flex gap-2"><i><House /></i>Home Page</Link>
										</li>
									{NavLinks.map(({ id, name, link }) => (
										<li key={id} className="py-6 px-4 hover:bg-gray-700 border-l border-r border-gray-800">
											<Link href={link}>{name}</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="nav_left flex mx-auto my-auto lg:relative items-center gap-2">
								<form className="invisible">	
									<div className="flex items-center py-6 px-4 gap-2">
										<input className="" type="text" placeholder="...search" name="search" />
										<button><i><Search /></i></button>
									</div>							
								</form>
								<Search />
								<User />
								<ShoppingCart />
							</div>
						</div>
						<div className="absolute lg:hidden z-20 right-0">
							{/*  Mobile menu button */}
							<button onClick={toggleNavMenu}><i><Menu /></i></button>
						</div>
						
					</div>
				</div>
				
			</div>
		
			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			
		</nav>
		
	</>
  );
}
