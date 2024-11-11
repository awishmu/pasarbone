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
			<div>
				{/* Item category*/}
				 
				
				<div className="four-col-item md:w-1/2 lg:w-1/4 p-4 ">
					<div className="box mb-8">
						<div className="text-green-500 border-2 border-sky-200 ">
							<Image src="https://images.unsplash.com/photo-1473648717346-73c9c15cbad6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={"V3getables"} 

							width={'100'} height={'100'}
							sizes="100vw"
							style={{
								  width: '100%',
								  height: 'auto',
								}}
							/>
						</div> 
						<div className="">
							<span className="text-lg">50% OFF</span>
							<h2 className="text-2xl font-bold">Vegetables</h2>
							<Link href="" className="p-4 bg-rose-700 border-white">Shop Now</Link>
						</div>
					</div>
				</div>
				
			</div>
		</div>
		
	</>
  );
}
