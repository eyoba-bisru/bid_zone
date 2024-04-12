"use client";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import FilterByCategory from "@/components/FilterByCategory";

export default function Home() {
  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
      <ScrollToTop />
      <Navbar />

      <FilterByCategory />

      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Discover amazing deals through bidding
        </h1>
      </div>
    </div>
  );
}
