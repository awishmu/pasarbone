import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';

const CategoryBox = [
	{
		id: 1,
		category: "sayuran",
		title: "Sayuran",
		discount: "50% Off",
		link: "/#",
		image: "",
	},
	{
		id: 2,
		image: "daging",
		title: "Daging",
		discount: "20% Off",
		link: "/#",
		image: "",
	},
	{
		id: 3,
		image: "snack",
		title: "Snack",
		discount: "30% Off",
		link: "/#",
		image: "",
	},
	{
		id: 4,
		image: "ikan",
		title: "Ikan",
		discount: "10% Off",
		link: "/#",
		image: "",
	},
	{
		id: 5,
		image: "buah",
		title: "Buah",
		discount: "40% Off",
		link: "/#",
		image: "",
	},
	{
		id: 6,
		image: "komoditi",
		title: "Komoditi",
		discount: "10% Off",
		link: "/#",
		image: "",
	},
]

import V3getables from "https://wallpapercave.com/dwp1x/wp1881530.jpg";

export default function Banner() {
  return (
	<>
		<div className="categories container mx-auto">
			<div className="w-full flex lg:justify-between flex-wrap bg-rose-100">
				{/* Item category 1*/}					
				<div className="four-col-item sm:w-1/2 lg:w-1/4 p-4 max-h-64 min-w-[250px]">
					<div className="box relative">
						<div className="text-green-500 border-2 border-sky-200 ">
							Image 
							
							/>
						</div> 
						<div className="absolute top-0 left-0 p-8 flex flex-col">
							<span className="text-lg">50% OFF</span>
							<h2 className="text-2xl font-bold">Sayuran</h2>
							<Link href="" className="p-4 mt-4 bg-rose-700 border-white">Shop Now</Link>
						</div>
					</div>
				</div>
				{/* 2 */}
				<div className="four-col-item md:w-1/2 lg:w-1/4 p-4 max-h-64 min-w-[250px]">
					<div className="box relative">
						<div className="text-green-500 border-2 border-sky-200 ">
							Image 
							 
							/>
						</div> 
						<div className="absolute top-0 left-0 p-8 flex flex-col">
							<span className="text-lg">50% OFF</span>
							<h2 className="text-2xl font-bold">Daging</h2>
							<Link href="" className="p-4 mt-4 bg-rose-700 border-white">Shop Now</Link>
						</div>
					</div>
				</div>
				{/* Item category 3*/}					
				<div className="four-col-item sm:w-1/2 lg:w-1/4 p-4 max-h-64 min-w-[250px]">
					<div className="box relative">
						<div className="text-green-500 border-2 border-sky-200 ">
							Image 
							 
							/>
						</div> 
						<div className="absolute top-0 left-0 p-8 flex flex-col">
							<span className="text-lg">50% OFF</span>
							<h2 className="text-2xl font-bold">Buah</h2>
							<Link href="" className="p-4 mt-4 bg-rose-700 border-white">Shop Now</Link>
						</div>
					</div>
				</div>
				{/* 4 */}
				<div className="four-col-item md:w-1/2 lg:w-1/4 p-4 max-h-64 min-w-[250px] ">
					<div className="box relative">
						<div className="text-green-500 border-2 border-sky-200 ">
							Image 
							 
							/>
						</div> 
						<div className="absolute top-0 left-0 p-8 flex flex-col">
							<span className="text-lg">50% OFF</span>
							<h2 className="text-2xl font-bold">Telur</h2>
							<Link href="" className="p-4 mt-4 bg-rose-700 border-white">Shop Now</Link>
						</div>
					</div>
				</div>
				
				
			</div>
		</div>
		
	</>
  );
}
