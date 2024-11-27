import Image from "next/image";
import Link from "next/link"; 
import { Star } from 'lucide-react';
import { Plus } from 'lucide-react';

const imageStyle = { 
  }
export default function Area() {
  return (
	<>
		<div>
			<section className="container mx-auto">
				<div className="header w-full mx-auto flex flex-col justify-center mb-12">
					<span className="mx-auto text-rose-500 text-xl">Product</span>
					<h2 className="mx-auto text-3xl">Our Hot Products</h2>
				</div>
				<div className="wrapper w-full flex justify-between flex-wrap gap-2 ">
					<div className="wrap-item w-[275px] lg:w-1/4 p-2 bg-gray-100 bg-opacity-5 rounded-md">
						<Link href="#" className="relative flex flex-col">
							<div className="image w-full my-4 bg-gray-100 bg-opacity-10 rounded-md">
								<Image 
									src="https://res.cloudinary.com/dev-empty/image/upload/v1630999309/eplrjqz3r5inll57ocxa.jpg" 
									alt="Honey" 
									width={100} height={100}
									className="object-fill h-48 w-96 "
 								/>
							</div>
							<div className="w-full content flex flex-col justify-center">
									<h3 className="mx-auto text-xl font-bold">Madu Lebah</h3>
									<span className="w-full px-2 py-4 mx-auto text-lg text-rose-500 flex justify-between">$22.20 <span className="flex"><Star /><Star /><Star /><Star /></span></span>
									<button className="w-full mx-auto px-8 py-4 border-sky-500 border-2 rounded-lg flex items-center justify-center gap-2"><Plus />Add</button>
								
							</div>
						</Link>
					</div>
					<div className="wrap-item w-[275px] mx-2 lg:w-1/4 p-2 bg-gray-100 bg-opacity-5 rounded-md">
						<Link href="#" className="relative flex flex-col">
							<div className="image w-full my-4 bg-gray-100 bg-opacity-10 rounded-md">
								<Image 
									src="https://cdn.pixabay.com/photo/2018/02/26/16/30/eggs-3183410_960_720.jpg" 
									alt="telur" 
									width={100} height={100}
									className="object-fill h-48 w-96 "
 								/>
							</div>
							<div className="w-full content flex flex-col justify-center">
									<h3 className="mx-auto text-xl font-bold">Telur Ayam Kampung</h3>
									<span className="w-full px-2 py-4 mx-auto text-lg text-rose-500 flex justify-between">$22.20 <span className="flex"><Star /><Star /><Star /><Star /></span></span>
									<button className="w-full mx-auto px-8 py-4 border-sky-500 border-2 rounded-lg flex items-center justify-center gap-2"><Plus />Add</button>
								
							</div>
						</Link>
					</div>
					<div className="wrap-item w-[275px] lg:w-1/4 p-2 bg-gray-100 bg-opacity-5 rounded-md">
						<Link href="#" className="relative flex flex-col">
							<div className="image w-full my-4 bg-gray-100 bg-opacity-10 rounded-md">
								<Image 
									src="https://res.cloudinary.com/dev-empty/image/upload/v1630999309/eplrjqz3r5inll57ocxa.jpg" 
									alt="Honey" 
									width={100} height={100}
									className="object-fill h-48 w-96 "
 								/>
							</div>
							<div className="w-full content flex flex-col justify-center">
									<h3 className="mx-auto text-xl font-bold">Madu Lebah</h3>
									<span className="w-full px-2 py-4 mx-auto text-lg text-rose-500 flex justify-between">$22.20 <span className="flex"><Star /><Star /><Star /><Star /></span></span>
									<button className="w-full mx-auto px-8 py-4 border-sky-500 border-2 rounded-lg flex items-center justify-center gap-2"><Plus />Add</button>
								
							</div>
						</Link>
					</div>
					<div className="wrap-item w-[275px] mx-2 my-4">
						<Link href="#" className="relative flex flex-col">
							<div className="image">
								<Image 
									src="https://cdn0-production-images-kly.akamaized.net/IwibSg0P6WOSFCLqi6frpxnhwSA=/0x24:999x587/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3420473/original/044747700_1617644743-shutterstock_1064990636.jpg" 
									alt="kripik" 
									width={100} height={100}
									className="object-fill h-48 w-96 "
 								/>
							</div>
							<div className="content flex flex-col justify-center pt-4">
									<h3 className="mx-auto text-xl font-bold">Honey</h3>
									<span className="mx-auto text-lg text-rose-500">$22.20</span>
									<button className="mx-auto ">Add</button>
								
							</div>
						</Link>
					</div>
					<div className="wrap-item w-[275px] mx-2 my-4">
						<Link href="#" className="relative flex flex-col">
							<div className="image">
								<Image 
									src="https://cdn0-production-images-kly.akamaized.net/IwibSg0P6WOSFCLqi6frpxnhwSA=/0x24:999x587/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3420473/original/044747700_1617644743-shutterstock_1064990636.jpg" 
									alt="kripik" 
									width={100} height={100}
									className="object-fill h-48 w-96 "
 								/>
							</div>
							<div className="content flex flex-col justify-center pt-4">
									<h3 className="mx-auto text-xl font-bold">Honey</h3>
									<span className="mx-auto text-lg text-rose-500">$22.20</span>
									<button className="mx-auto ">Add</button>
								
							</div>
						</Link>
					</div>
					<div className="wrap-item w-[275px] mx-2 my-4">
						<Link href="#" className="relative flex flex-col">
							<div className="image">
								<Image 
									src="https://cdn0-production-images-kly.akamaized.net/IwibSg0P6WOSFCLqi6frpxnhwSA=/0x24:999x587/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3420473/original/044747700_1617644743-shutterstock_1064990636.jpg" 
									alt="kripik" 
									width={100} height={100}
									className="object-fill h-48 w-96 "
 								/>
							</div>
							<div className="content flex flex-col justify-center pt-4">
									<h3 className="mx-auto text-xl font-bold">Honey</h3>
									<span className="mx-auto text-lg text-rose-500">$22.20</span>
									<button className="mx-auto ">Add</button>
								
							</div>
						</Link>
					</div>
				</div>
			</section>
		</div>
	</>
  )
};
