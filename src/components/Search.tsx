"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Search = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchCheckbox, setSearchCheckbox] = useState("all");
  const router = useRouter();

  // using useEffect

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/categories");
        const data = await response.json();
        setLoading(false);
        setCategories(data);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchCheckbox);
    console.log(searchInput);

    router.push(`/search?category=${searchCheckbox}&q=${searchInput}`);
    setSearchInput("");
  };

  return (
    <form
      className="hidden lg:flex justify-center items-center gap-2"
      onSubmit={handleSubmit}
    >
      <Select value={searchCheckbox} onValueChange={setSearchCheckbox}>
        <div className="hidden xl:block">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Search by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((category) => (
                <SelectItem key={category.name} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </div>
      </Select>

      <Input
        placeholder="Search everything"
        className="w-[450px] hidden lg:block"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
      />

      <Button className="hidden lg:block" type="submit">
        Search
      </Button>
    </form>
  );
};

export default Search;
