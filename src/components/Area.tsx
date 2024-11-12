import Image from "next/image";
import Link from "next/link"; 


export default function Area() {
  return (
	<>
		<div>
			<section>
				<div className="flex flex-col">
					<span>Product</span>
					<h2>Our Hot Product</h2>
				</div>
				<div className="">
					<Link href="#">
						<div className="image">
							Image />
						</div>
						<div className="content">
							<h3>Honey</h3>
							<span>$22.20</span>
							<button>Add</button>
						</div>
					</Link>>


				</div>
			</section>
		</div>
		
	</>
  );
}
