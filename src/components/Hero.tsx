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
		<section className="bg-gray-900 shadow-sm">
			<div className="container mx-auto flex justify-center" >
				<div className="relative">
					<h2>Title title</h2>
					<p>Sub title sub title</p>
					<button>Shop Now</button>
				</div>
			</div>
		
			
		</section>
		
	</>
  );
}
