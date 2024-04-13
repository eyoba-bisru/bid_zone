"use client";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import FilterByCategory from "@/components/FilterByCategory";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Suspense } from "react";

export const products = [
  {
    id: 1,
    title: "Product 1",
    image: "/shoe.jpg",
    price: 3000,
    category: "Shoes",
    condition: "new",
    bids: 10,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    title: "Product 2",
    image: "/shoe.jpg",
    price: 2000,
    category: "Shoes",
    condition: "refebshnished",
    bids: 12,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    title: "Product 3",
    image: "/shoe.jpg",
    price: 4000,
    category: "Shoes",
    condition: "new",
    bids: 8,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    title: "Pair of Blue Lace-up Sneakers",
    image: "/shoe.jpg",
    price: 5000,
    category: "Shoes",
    condition: "refebshnished",
    bids: 15,
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<div>Loading</div>}>
        <FilterByCategory />
      </Suspense>

      <div className="flex justify-center items-center mb-10">
        <h1 className="text-3xl font-bold">
          Discover amazing deals through bidding
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
