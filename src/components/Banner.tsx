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
export default function Banner() {
  return (
	<>
		<div className="categories">
			<div>
				{/* Item category*/}
				
				<div className="four-col-item md:w-1/2 lg:w-1/4 p-4 border-2 border-sky-200 ">
					<div className="box relative mb-8">
						<div className="absolute text-green-500 -z-10">
							Image /> Image /> Image />
						</div>
						<div className="flex flex-col">
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
