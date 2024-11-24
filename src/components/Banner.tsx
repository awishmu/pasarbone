import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';

const CategoriesBox = [
	{
		id: 1,
		category: "sayuran",
		title: "Sayuran",
		discount: "50% Off",
		textColor: "text-violet-800",
		link: "/#",
		imageSrc: "https://media.istockphoto.com/id/1162332668/id/foto/petani-memegang-kotak-kayu-tangan-dengan-sayuran-menghasilkan-di-kebun-makanan-segar-dan.jpg?s=612x612&w=0&k=20&c=JzT8XGXu-_Rts0tA3fAt_n5-SK02QLSA72YuQZb6mnM=",
	},
	{
		id: 2,
		image: "daging",
		title: "Daging",
		discount: "20% Off",
		textColor: "text-zinc-700",
		link: "/#",
		imageSrc: "https://media.istockphoto.com/id/513223666/id/foto/aneka-daging-mentah.jpg?s=612x612&w=0&k=20&c=eLJ3Sod1jc8fiKnntNi-EpK5cJ-iQk6JYsu0-WQusyA=",
	},
	{
		id: 3,
		image: "snack",
		title: "Snack",
		discount: "30% Off",
		textColor: "text-fuchsia-700",
		link: "/#",
		imageSrc: "https://media.istockphoto.com/id/1078654678/id/foto/keripik-kentang-buatan-sendiri.jpg?s=612x612&w=0&k=20&c=GwYboUyrWxvgsQiDO1cH0n2c2mEGSICcWB2C22p4HzI=",
	},
	{
		id: 4,
		image: "ikan",
		title: "Ikan",
		discount: "10% Off",
		textColor: "text-green-700",
		link: "/#",
		imageSrc: "https://media.istockphoto.com/id/1253824866/id/foto/tangkapan-besar-ikan-haring-di-atas-kapal-di-laut-utara.jpg?s=612x612&w=0&k=20&c=yzeMyPO8InbX7mIitg2Exx62e-jHHRfz5he8RQUm5hs=",
	},
	{
		id: 5,
		image: "buah",
		title: "Buah",
		discount: "40% Off",
		textColor: "text-blue-700",
		link: "/#",
		imageSrc: "https://media.istockphoto.com/id/1348357668/id/foto/durian-robek-dan-segar.jpg?s=612x612&w=0&k=20&c=4wsKtFMCYvFSYRsHC3nQ-PwXo-SmXdK6Vy33xcPCCQg=",
	},
	{
		id: 6,
		image: "komoditi",
		title: "Komoditi",
		discount: "30% Off",
		textColor: "text-emerald-700",
		link: "/#",
		imageSrc: "https://media.istockphoto.com/id/1363110666/id/foto/cengkeh-kering-di-tangan.jpg?s=612x612&w=0&k=20&c=v9qawdNvcipI1oftl70XA6CP0wwqjE68gVFKqmZ3hHU=",
	},
	{
		id: 7,
		image: "telur",
		title: "Telur",
		discount: "10% Off",
		textColor: "text-rose-700",
		link: "/#",
		imageSrc: "https://media.istockphoto.com/id/1157804675/id/foto/telur-coklat-di-piring.jpg?s=612x612&w=0&k=20&c=rZcYUF1-a58VzoL8DJr8fDmcp7oB6jw7372j7EUjF-A=",
	},
]

const arr = CategoriesBox;
function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

const getCategoriesBox = getMultipleRandom(arr, 4);

export default function Banner() {
  return (
	<>
		<div className="categories container mx-auto py-20">
			<div className="carousel w-full flex lg:justify-between flex-col md:flex-row md:overflow-x-hidden">
			
				{getCategoriesBox.map(({ id, image, title, discount, link, imageSrc, textColor}) => (
				<div key={id} className="four-col-item md:w-1/2 xl:w-1/4 p-4 mb-4  mx-2 max-h-[250px] min-w-[300px] max-w-[320px] border-2 border-sky-200">
					<div className="box relative w-full h-full">
 							<Image src={imageSrc} alt={title}
								width={'100'} height={'100'}
								style={{
									width:'100%',
									height:'100%',
									objectFit: 'cover'
								}}
							/>
 						<div className={`p-8 flex flex-col absolute top-0 left-0 ${textColor}`}>
							<span className="text-lg font-bold">{discount}% OFF </span>
							<h2 className="text-2xl font-bold">{title}</h2>
							<Link href="" className="p-4 mt-4 bg-rose-700 border-white text-white font-bold">Shop Now</Link>
						</div>
					</div>
				</div>
				))}

			</div>
		</div>
		
	</>
  );
}
