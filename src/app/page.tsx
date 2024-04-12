"use client";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

const categories = [
  "all",
  "electronics",
  "fashion",
  "home",
  "sports",
  "toys",
  "books",
  "pets",
  "jewelery",
  "health",
  "computers",
  "automotive",
  "industrial",
  "baby",
  "shoes",
  "outdoor",
  "grocery",
  "food",
  "music",
  "travel",
  "office",
];

export default function Home() {
  const searchParam = useSearchParams();
  const param = searchParam.get("category");

  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
      <ScrollToTop />
      <Navbar />

      <div className="flex justify-center items-center flex-wrap mb-4">
        {categories.map((category) => (
          <Link key={category} href={`/?category=${category}`} passHref>
            <button
              className={`
                px-4 py-2 rounded-md text-sm mr-4
                ${
                  param === category
                    ? "bg-gray-100"
                    : param === null && category === "all" && "bg-gray-100"
                }
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          Discover amazing deals through bidding
        </h1>
      </div>
    </div>
  );
}
