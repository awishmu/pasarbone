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
					<span className="mx-auto text-rose-500 text-xl">Product</span>
					<h2 className="mx-auto text-3xl">Our Hot Products</h2>
				</div>
				<div className="wrapper w-full flex justify-item-start justify-between flex-wrap gap-2 ">
			 
				{AreaItems.map(({ id, category, title, price, offer, star, link, imageSrc}) => (
					<div key={id} className="wrap-item w-full max-w-[275px] lg:w-1/4 p-2 bg-sky-100 bg-opacity-90 rounded-md">
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
									<h3 className="mx-auto text-xl font-bold">Madu Lebah ini</h3>
									<span className="w-full px-2 py-4 mx-auto text-lg text-rose-500 flex justify-between">$22.20 <span className="flex"><Star /><Star /><Star /><Star /></span></span>
									<button className="w-full mx-auto px-8 py-4 border-sky-500 border-2 rounded-lg flex items-center justify-center gap-2"><Plus />Add</button>
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
