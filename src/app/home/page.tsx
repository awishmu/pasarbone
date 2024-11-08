import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function HomePage() {
  return (
	<>
		<header className="container w-full mx-auto flex flex-col" >
			<Navbar />
			<Hero />
        </header>
		
	</>
  );
}
