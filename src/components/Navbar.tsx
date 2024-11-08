import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';

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
		<nav className="bg-gray-900 shadow-sm">
			<div className="container mx-auto flex justify-center" >
				<div className="relative">
					<div className="absolute block md:hidden">
					{/*  Mobile menu button */}
						<button> </button>
					</div>
					<div className="">
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div className="navright">
								<ul className="flex ">
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
							<div className="navleft">
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
			</div>
		
			{/* <!-- Mobile menu, show/hide based on menu state. --> */}
			<div className="mobile-nav  h4 w-90 bg-rose-300">
				<p>mobilenav</p>
			</div>
		</nav>
		
	</>
  );
}
