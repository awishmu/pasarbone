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
		<main className="bg-gray-50 w-full">
			<Area />
		</main>
		<Footer />
		
	</>
  );
}
