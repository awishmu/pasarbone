"use client";
import { useEffect, useState  } from "react";

import Image from "next/image";
import Link from "next/link";
import Area from "@/components/Area";
  
import { AreaItems } from "@/constants";

export default function PaginPage() {
	
	const POSTS_PER_PAGE = 15;
	const totalPages = '';
	const currentPages = '';

const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)



useEffect(() => {
	fetchProducts()
}, [])	
	
  return (
	<> 
		<main> 
			<Area /> 
		</main>
		
	</>
  );
}
