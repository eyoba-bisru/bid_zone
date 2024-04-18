"use client";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/product";

const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const param = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/search?category=" +
            param.get("category") +
            "&q=" +
            param.get("q")
        );
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [param]);

  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-3xl font-bold">
          Discover amazing deals through bidding
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
        {loading ? (
          <>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[390px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[390px]" />
                <Skeleton className="h-4 w-[390px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[390px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[390px]" />
                <Skeleton className="h-4 w-[390px]" />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[390px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[390px]" />
                <Skeleton className="h-4 w-[390px]" />
              </div>
            </div>
          </>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))
        )}

        {error && <div className="mx-auto text-red-500">{error}</div>}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
