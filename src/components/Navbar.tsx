import Image from "next/image";
import Link from "next/link";
const NavLinks = [
	{
		id: 1,
		name: "Home",
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
				<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
					<div className="">
						<ul className="flex space-x-4">
						{NavLinks.map(({ id, name, link }) => (
							<li key={id}>
								<Link href={link}>{name}</Link>
							</li>
						))}
						</ul>
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
