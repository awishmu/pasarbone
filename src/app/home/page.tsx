import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Area from "@/components/Area";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
	<>
		<header className="w-full mx-auto flex flex-col" >
			<Navbar />
        	</header>
		<main>
			<Hero />
			<Banner />
			<Area />
			<Footer />
		</main>
		
	</>
  );
}
