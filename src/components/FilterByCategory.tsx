import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Category } from "../../types/product";

const FilterByCategory = async () => {
  const searchParam = useSearchParams();
  const [categories, setCategories] = useState<Category[]>([]);
  const param = searchParam.get("category");

  // using useEffect

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-wrap mb-4 mt-4">
      {categories.map((category) => (
        <Link key={category.id} href={`/?category=${category.name}`} passHref>
          <button
            className={`
                px-4 py-2 rounded-md text-sm mr-4
                ${
                  param === category.name
                    ? "bg-gray-100"
                    : param === null && category.name === "all" && "bg-gray-100"
                }
              `}
          >
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default FilterByCategory;
