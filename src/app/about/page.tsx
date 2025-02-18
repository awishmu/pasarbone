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
		<main className="w-full text-gray-950 bg-gray-50 pb-24">
			<section className="mx-auto max-w-screen-xl">
				<div  className="max-w-xl pt-8">
					<h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Tentang Kami</h1>
				</div>
				<div>
					<p>Sebagai bentuk kepedelian kami pada kesinambungan dan kelestarian lingkungan. Kami berupaya untuk menghasilkan makanan dan hasil hasil pertanian yang sehat dan organik  </p>
					<p>Diantara upaya kami adalah menciptakan peternakan organik (alami) berupa produk ayam kampung asli dan peternakan sapi lokal secara tradisional</p>
			
				</div>
			</section>
			<section className="mx-auto max-w-screen-xl">
				<div  className="max-w-xl pt-8">
					<h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Kontak Kami</h1>
				</div>
				<div>
					<div className="flex gap-3 flex-col md:flex-row">
						<article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
						  <div className="flex items-center gap-4">
							<img
							  alt=""
							  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
							  className="size-16 rounded-full object-cover"
							/>

							<div>
							  <h3 className="text-lg font-medium text-white">Whatsapp</h3>

							  <div className="flow-root">
								<h4 className="text-xs font-medium text-gray-300">0812 6805 2229</h4>
							  </div>
							</div>
						  </div>
						</article>
						<article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
						  <div className="flex items-center gap-4">
							<img
							  alt=""
							  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
							  className="size-16 rounded-full object-cover"
							/>

							<div>
							  <h3 className="text-lg font-medium text-white">Mobile Phone</h3>

							  <div className="flow-root">
								<h4 className="text-xs font-medium text-gray-300">0812 6805 2229</h4>
							  </div>
							</div>
						  </div>
						</article>
						<article className="rounded-xl border border-gray-700 bg-gray-800 p-4">
						  <div className="flex items-center gap-4">
							<img
							  alt=""
							  src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
							  className="size-16 rounded-full object-cover"
							/>

							<div>
							  <h3 className="text-lg font-medium text-white">Email</h3>

							  <div className="flow-root">
								<h4 className="text-xs font-medium text-gray-300">awishdotid@gmail.com</h4>
							  </div>
							</div>
						  </div>
						</article>
					</div>
				</div>
				<div>
					<div></div>
				</div>
			</section>
			<section>
				<div>
				</div>
				<div>
				
				</div>
			</section>
		</main>
		<Footer />
		
	</>
  );
}
