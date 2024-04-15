"use client";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import FilterByCategory from "@/components/FilterByCategory";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import products from "@/lib/data.json";

export default function Home() {
  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
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
