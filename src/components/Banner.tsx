import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';

const BannerBox = [
	{
		id: 1,
		image: "gudang",
		title: "Temukan Penawaran dekat rumah",
		subtitle: "Pengiriman yang cepat dan jelas ",
		link: "/#",
	},
	{
		id: 2,
		image: "toko",
		title: "Toko Kami",
		subtitle: "Kami hadir disetiap lokasi ",
		link: "/#",
	},
	{
		id: 3,
		image: "diskon",
		title: "Dapatkan Diskon Meriah",
		subtitle: "Kami senantiasa memberikan diskon pada langganan kami ",
		link: "/#",
	},
	{
		id: 4,
		image: "klien",
		title: "Melayani lebih banyak",
		subtitle: "Kami hadir untuk memberikan layanan dan kemudahan dalam memenuhi kebutuhan harian ",
		link: "/#",
	},
	
]

import V3getables from "https://wallpapercave.com/dwp1x/wp1881530.jpg";

export default function Banner() {
  return (
	<>
		<div className="categories container mx-auto">
			<div className="w-full flex justify-between">
				{/* Item category 1*/}					
				<div className="four-col-item sm:w-1/2 lg:w-1/4 p-4 max-h-64 min-w-[250px]">
					<div className="box relative">
						<div className="text-green-500 border-2 border-sky-200 ">
							<Image src="https://images.unsplash.com/photo-1473648717346-73c9c15cbad6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={"V3getables"} 

							width={'100'} height={'80'}
							sizes="100vw"
							style={{
								  width: '100%',
								  height: 'auto',
								}}
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
							<Image src="https://media.istockphoto.com/id/184624619/id/foto/irisan-new-york-strip-steak-di-talenan.webp?s=1024x1024&w=is&k=20&c=1bBxBn4Hwk0Gp5n07VEPyHDvcP2m9hwai_rC655yWXU=" alt={"V3getables"} 

							width={'100'} height={'80'}
							sizes="100vw"
							style={{
								  width: '100%',
								  height: 'auto',
								}}
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
							<Image src="https://media.istockphoto.com/id/1504179188/id/foto/gambar-yang-dipotong-dari-tangan-orang-dewasa-memegang-durian-di-rumah.webp?s=1024x1024&w=is&k=20&c=vj4N3seqrhpy3EbuOHeo_Q-eOE4IcEfwvcFZfqmqy6c=" alt={"V3getables"} 

							width={'100'} height={'80'}
							sizes="100vw"
							style={{
								  width: '100%',
								  height: 'auto',
								}}
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
							<Image src="https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={"V3getables"} 

							width={'100'} height={'80'}
							sizes="100vw"
							style={{
								  width: '100%',
								  height: 'auto',
								}}
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
