import Image from "next/image";
import Link from "next/link"; 
const imageStyle = { 
  }
export default function Area() {
  return (
	<>
		<div>
			<section className="container mx-auto">
				<div className="header w-full mx-auto flex flex-col justify-center">
					<span className="mx-auto text-rose-500 text-xl">Product</span>
					<h2 className="mx-auto text-3xl">Our Hot Product</h2>
				</div>
				<div className="wrapper w-full flex justify-between flex-wrap gap-2 ">
					<div className="wrap-item w-[275px] mx-2 my-4">
						<Link href="#" className="relative flex flex-col">
							<div className="image">
								<Image 
									src="https://res.cloudinary.com/dev-empty/image/upload/v1630999309/eplrjqz3r5inll57ocxa.jpg" 
									alt="Honey" 
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
