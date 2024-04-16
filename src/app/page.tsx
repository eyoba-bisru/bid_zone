"use client";
import FilterByCategory from "@/components/FilterByCategory";
import Footer from "@/components/Footer";
import { Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ProductCard from "@/components/ProductCard";
import { Product } from "../../types/product";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/products");
        const data = await response.json();
        setLoading(false);
        setProducts(data);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
      <FilterByCategory />

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
}
