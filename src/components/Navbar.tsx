import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import PBCLogo from '/public/pbc_logo.png'

const NavLinks = [
	{
		id: 1,
		name: "Product",
		link: "/#",
	},
	{
		id: 2,
		name: "Cart",
		link: "/#",
	},
	{
		id: 3,
		name: "About",
		link: "/#",
	},
	{
		id: 4,
		name: "Contact",
		link: "/#",
	}
]
export default function Navbar() {
  return (
	<>
		<nav className="bg-gray-900 shadow-sm w-full">
			<div className="container mx-auto flex justify-between" >
				<div className="w-full dark:text-gray-100 text-gray-100">
					<div className="relative w-full flex justify-between items-center">
							<div className="flex shrink-0 items-center py-4 ">
								<Link href="#"><Image src={PBCLogo} alt={'PBCLogo'} width={50} height={50} /></Link>
							</div>
						<div className="nav_main flex flex-1 items-center justify-center md:justify-between">
							<div className="nav_right hidden lg:flex  flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
								<ul className="flex sm:ml-6 ">
										<li className="py-6 px-4 hover:bg-gray-700 flex gap-2">
											<i><House /></i>Home Page
										</li>
									{NavLinks.map(({ id, name, link }) => (
										<li key={id} className="py-6 px-4 hover:bg-gray-700 border-l border-r border-gray-800">
											<Link href={link}>{name}</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="nav_left mx-auto">
								<form>	
									<div className="flex items-center py-6 px-4 gap-2">
										<input className="" type="text" placeholder="...search" name="search" />
										<button><i><Search /></i></button>
									</div>							
								</form>
							</div>
						</div>
						<div className="absolute  lg:hidden z-20 right-0">
							{/*  Mobile menu button */}
							<button><i><Menu /></i></button>
						</div>
						
					</div>
				</div>
				
			</div>
		
			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			<div className="mobile-nav  h4 w-90 bg-rose-300">
				<p>mobilenav</p>
			</div>
		</nav>
		
	</>
  );
}
