"use client";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import FilterByCategory from "@/components/FilterByCategory";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { Suspense, useEffect, useState } from "react";
import products from "@/lib/data.json";
import { Product } from "../../types/product";
import Products from "@/components/Products";

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

      <Suspense fallback={<div>Loading</div>}>
        <Products />
      </Suspense>
      <Footer />
    </div>
  );
}
