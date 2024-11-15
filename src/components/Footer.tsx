import Image from "next/image";
import Link from "next/link";
import { House } from 'lucide-react';
import { Search } from 'lucide-react';

export default function Footer() {
  return (
	<>
		<footer>
			<div className="footer-grid">
				<div>About The Store
				</div>
			</div>
			
			<div className="footer-bottom pt-6 mt-15">
				<p>Copyright © 2024 <Link href="#">Shoponix</Link> Designed By <Link href="#">EnvyTheme</Link> | All rights reserved.</p>
			</div>
		</footer>
		
	</>
  );
}
