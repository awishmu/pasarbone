import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Area from "@/components/Area";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
	<>
		<header className="w-full mx-auto flex flex-col" >
			<Navbar />
        </header>
		<main>
		<section className="container mx-auto w-full py-24 px-12">
			<div className="flex justify-between wrapper">
				<div key={''} className="wrap-item card w-295 w-full w-1/2 lg:w-1/4 p-2 bg-gray-100 bg-opacity-90 rounded-md mb-2">
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
									<div className="w-full mx-auto flex justify-between">
										<h3 className="mx-auto text-xl font-bold text-gray-950">Madu Lebah ini</h3>
										<button className="bg-rose-500 rounded-full text-white">+</button>
									</div>
									<span className="w-full px-2 py-4 mx-auto text-lg text-rose-500 flex justify-between">$22.20 <span className="flex">)*(</span></span>
									
							</div>
						</Link>
					</div>
			</div> 
		</section>
		</main>
		<Footer />
		
	</>
  );
}
