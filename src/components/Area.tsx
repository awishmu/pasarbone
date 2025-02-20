import Image from "next/image";
import Link from "next/link"; 
import { Star } from 'lucide-react';
import { Plus } from 'lucide-react';
import { AreaItems } from "@/constants";

const imageStyle = {}

export default function Area() {
  return (
	<>
		<div className="py-8">
			<section className="container mx-auto mt-8">
				<div className="header w-full mx-auto flex flex-col justify-center my-12">
					<span className="mx-auto text-rose-500 text-xl font-bold">Product</span>
					<h2 className="mx-auto text-4xl font-bold text-gray-950">Our Hot Products</h2>
				</div>
				<div className="wrapper w-full flex justify-item-start justify-between flex-wrap">
			 
				{AreaItems.map(({ id, category, title, price, offer, star, link, imageSrc}) => (
					<div key={id} className="wrap-item w-full w-1/2 lg:w-1/4 p-2 rounded-md mb-2">
						<Link href="#" className="relative flex flex-col">
							<div className="image w-full mb-4">
								<Image 
									src={imageSrc} 
									alt={title} 
									width={100} height={100}
									className="object-cover w-full h-48"
 								/>
							</div>
							<div className="w-full content flex flex-col justify-center">
									<div className="w-full mx-auto flex justify-between items-center">
										<div className="mx-auto text-xl font-medium text-gray-950 w-[80%] capitalize"><h3>{title}</h3></div>
										<button className="bg-rose-500 rounded-full text-white"><Plus /></button>
									</div>
									<span className="w-full px-2 py-4 mx-auto text-lg text-rose-500 flex justify-between">${price} <span className="flex"><Star /><Star /><Star /><Star /></span></span>
									
							</div>
						</Link>
					</div>
				))}
				</div>
			</section>
		</div>
	</>
  )
};
