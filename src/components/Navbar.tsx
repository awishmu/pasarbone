import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';

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
				<div className="relative w-full inline-block">
					<div className="w-full">
							<div className="flex shrink-0 items-center ">
								<i><House /></i>
							</div>
						<div className="nav_main flex flex-1 items-center justify-center md:justify-between">
							<div className="nav_right flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
								<ul className="flex md:inline-block sm:ml-6 ">
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
							<div className="nav_left">
								<form>	
									<div className="flex items-center py-6 px-4 gap-2">
										<input className="" type="text" placeholder="...search" name="search" />
										<button><i><Search /></i></button>
									</div>							
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="absolute inline md:hidden">
					{/*  Mobile menu button */}
					<button><i><Menu /></i></button>
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
