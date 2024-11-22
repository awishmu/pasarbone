import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';

const HeroItems = [
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
export default function Navbar() {
  return (
	<>
		<section className="dark:bg-gray-900 shadow-sm">
			<div className="container mx-auto pb-10" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664551734602-49640bd82eba?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}>
				<div className="relative dark:text-white p-8 flex flex-col">
					<h2 className="text-5xl font-bold lg:w-1/2">Enjoy nature Sustainable travel</h2>
					<p className="text-xl font-bold lg:w-1/2">Enjoy nature Sustainable travel in BMW iX</p>
					<Link href="#" className="border-2 border-white p-3 rounded-lg mt-6 w-28 flex items-center justify-center">Shop Now</Link>
				</div>
			</div>
		
			
		</section>
		
	</>
  );
}
