import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center mb-10">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Products;
