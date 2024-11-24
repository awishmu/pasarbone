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
		link: "/#",
		imageSrc: "/public/images/1124/istockphoto-1162332668-612x612-sayur.jpg",
	},
	{
		id: 2,
		image: "daging",
		title: "Daging",
		discount: "20% Off",
		link: "/#",
		imageSrc: "/public/images/1124/istockphoto-1200498591-612x612-daging.jpg",
	},
	{
		id: 3,
		image: "snack",
		title: "Snack",
		discount: "30% Off",
		link: "/#",
		imageSrc: "/public/images/1124/istockphoto-1078654678-612x612-kripik.jpg",
	},
	{
		id: 4,
		image: "ikan",
		title: "Ikan",
		discount: "10% Off",
		link: "/#",
		imageSrc: "/public/images/1124/istockphoto-1156027693-612x612-ikan.jpg",
	},
	{
		id: 5,
		image: "buah",
		title: "Buah",
		discount: "40% Off",
		link: "/#",
		imageSrc: "/public/images/1124/istockphoto-1348357668-612x612-durian.jpg",
	},
	{
		id: 6,
		image: "komoditi",
		title: "Komoditi",
		discount: "30% Off",
		link: "/#",
		imageSrc: "/public/images/1124/istockphoto-1363110666-612x612-cengkeh.jpg",
	},
	{
		id: 7,
		image: "telur",
		title: "Telur",
		discount: "10% Off",
		link: "/#",
		imageSrc: "/public/images/1124/istockphoto-1157804675-612x612-telur.jpg",
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
		<div className="categories container mx-auto">
			<div className="carousel w-full flex lg:justify-between flex-col md:flex-row md:overflow-x-hidden` ">
			
				 			
				<div className="four-col-item md:w-1/2 xl:w-1/4 p-4 mb-4  mx-2 max-h-[250px] min-w-[300px] max-w-[320px] border-2 border-sky-200">
					<div className="box relative w-full h-full">
 							<Image src="https://media.istockphoto.com/id/1253824866/id/foto/tangkapan-besar-ikan-haring-di-atas-kapal-di-laut-utara.jpg?s=612x612&w=0&k=20&c=yzeMyPO8InbX7mIitg2Exx62e-jHHRfz5he8RQUm5hs=" alt="title" 
								width={'100'} height={'100'}
								style={{
									width:'100%',
									height:'100%',
									objectFit: 'cover'
								}}
							/>
 						<div className="p-8 flex flex-col absolute top-0 left-0">
							<span className="text-lg">30% OFF</span>
							<h2 className="text-2xl font-bold">Ikan</h2>
							<Link href="" className="p-4 mt-4 bg-rose-700 border-white">Shop Now</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	</>
  );
}
