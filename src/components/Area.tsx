import Image from "next/image";
import Link from "next/link"; 


export default function Area() {
  return (
	<>
		<div>
			<section className=" ">
				<div className="header w-full mx-auto flex flex-col justify-center">
					<span className=" mx-auto">Product</span>
					<h2 className="mx-auto">Our Hot Product</h2>
				</div>
				<div className="wrapper w-full">
					<div className="wrap-item border-lime-500 border-2 max-w-[275px] bg-sky-700">
						<Link href="#">
							<div className="image">
								<Image 
									src="https://cdn0-production-images-kly.akamaized.net/IwibSg0P6WOSFCLqi6frpxnhwSA=/0x24:999x587/680x383/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3420473/original/044747700_1617644743-shutterstock_1064990636.jpg" 
									alt="kripik" 
									width={100} height={80}
									fill={}
								/>
							</div>
							<div className="content">
								<h3>Honey</h3>
								<span>$22.20</span>
								<button>Add</button>
							</div>
						</Link>
					</div>
					


				</div>
			</section>
		</div>
		
	</>
  );
}
