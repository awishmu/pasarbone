import Image from "next/image";
import Link from "next/link"; 
import { Star } from 'lucide-react';
import { Plus } from 'lucide-react';
import { AreaItems } from "@/constants";

const imageStyle = {}

export default function Area() {
  return (
	<>
		<div>
			<section className="container mx-auto">
				<div className="header w-full mx-auto flex flex-col justify-center mb-12">
					<span className="mx-auto text-rose-500 text-xl font-bold">Product</span>
					<h2 className="mx-auto text-4xl font-bold text-gray-950">Our Hot Products</h2>
				</div>
				<div className="wrapper w-full flex justify-item-start justify-between flex-wrap">
			 
				{AreaItems.map(({ id, category, title, price, offer, star, link, imageSrc}) => (
					<div key={id} className="wrap-item w-full w-1/2 lg:w-1/4 p-2 bg-gray-100 bg-opacity-90 rounded-md mb-2">
						<Link href="#" className="relative flex flex-col">
							<div className="image w-full mb-4">
								<Image 
									src="https://res.cloudinary.com/dev-empty/image/upload/v1630999309/eplrjqz3r5inll57ocxa.jpg" 
									alt="Honey" 
									width={100} height={100}
									className="object-cover w-full h-48"
 								/>
							</div>
							<div className="w-full content flex flex-col justify-center">
									<div className="w-full mx-auto flex justify-between">
										<h3 className="mx-auto text-xl font-bold text-gray-950">Madu Lebah ini</h3>
										<button className="bg-rose-500 rounded-full text-white"><Plus /></button>
									</div>
									<span className="w-full px-2 py-4 mx-auto text-lg text-rose-500 flex justify-between">$22.20 <span className="flex"><Star /><Star /><Star /><Star /></span></span>
									
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
