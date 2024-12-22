import Image from "next/image";
import Link from "next/link";
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
	<>
		<footer className="container mx-auto bg-gray-950 w-full py-24 px-12">
			<div className="footer-grid flex justify-between font-bold">
				<div className="lg:w-1/4 py-4 max-w-[256px]">
					<div className="footer-widget-single mb-8 ">
						<h3 className="relative font-bold text-xl mb-6 pb-2 border-b border-gray-800 before:content-[' '] before:w-16 before:h-2 before:absolute before:bottom-0 before:border-b before:border-rose-500">About The Store</h3>
						<div className="">
							<p>Layanan Kami lebih berfokus pada ketersediaan makanan sehat dan berkualitas. Diambil dari hasil pertanian organik atau meminimalisir penggunaan bahan kimia pada pengolahannya.</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/4 py-4 max-w-[256px]">
					<div className="footer-widget-single mb-8 ">
						<h3 className="relative font-bold text-xl mb-6 pb-2 border-b border-gray-800 before:content-[' '] before:w-16 before:h-2 before:absolute before:bottom-0 before:border-b before:border-rose-500">Quick Links</h3>
						<ul className="">
							<li><Link href="#" className="hover:text-rose-500">About Us</Link></li>
							<li><Link href="#" className="hover:text-rose-500">Shop Now!</Link></li>
							<li><Link href="#" className="hover:text-rose-500">Cart</Link></li>
						</ul>
					</div>
				</div>
				<div className="lg:w-1/4 py-4 max-w-[256px]">
					<div className="footer-widget-single mb-8 ">
						<h3 className="relative font-bold text-xl mb-6 pb-2 border-b border-gray-800 before:content-[' '] before:w-16 before:h-2 before:absolute before:bottom-0 before:border-b before:border-rose-500">Support Links</h3>
						<ul className="">
							<li><Link href="#" className="hover:text-rose-500">Sign Up</Link></li>
							<li><Link href="#" className="hover:text-rose-500">Login</Link></li>
							<li><Link href="#" className="hover:text-rose-500">Home</Link></li>
						</ul>
					</div>
				</div>
				<div className="lg:w-1/4 py-4 max-w-[256px]">
					<div className="footer-widget-single mb-8 ">
						<h3 className="relative font-bold text-xl mb-6 pb-2 border-b border-gray-800 before:content-[' '] before:w-16 before:h-2 before:absolute before:bottom-0 before:border-b before:border-rose-500">Contact Info</h3>
						<ul className="">
							<li className="relative before:content-[' '] before:w-2 before:h-2 before:bg-rose-500 before:absolute before:top-[25%] before:rounded-lg"><Link href="#" className="ml-4 hover:text-rose-500">Desa Pattiro Bajo</Link></li>
							<li className="relative before:content-[' '] before:w-2 before:h-2 before:bg-rose-500 before:absolute before:top-[25%] before:rounded-lg"><Link href="#" className="ml-4 hover:text-rose-500">0812 6805 2229</Link></li>
							<li className="relative"><Link href="#" className="ml-4 hover:text-rose-500"><Instagram className="w-4 h-4" /> awishdarwis</Link></li>
						</ul>
					</div>
				</div>
				
			</div>
			
			<div className="footer-bottom pt-6 mt-15 container mx-auto flex justify-center">
				<p className="mx-auto">Copyright © 2024 <Link href="#">PasarBone.Com</Link> | All rights reserved.</p>
			</div>
		</footer>
		
	</>
  );
}
