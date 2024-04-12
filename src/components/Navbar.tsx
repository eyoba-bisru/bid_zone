import React from "react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <Image
          src="/logo.svg"
          className="w-10 h-10 lg:w-20 lg:h-20"
          width={54}
          height={54}
          alt="logo"
        />
        <h4 className="text-sm">BidZone</h4>
      </div>

      <form className="hidden lg:flex justify-center items-center gap-2">
        <Select>
          <div className="hidden xl:block">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Search by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </div>
        </Select>

        <Input
          placeholder="Search everything"
          className="w-[450px] hidden lg:block"
        />

        <Button className="hidden lg:block" type="submit">
          Search
        </Button>
      </form>

      <div>
        <a href="/login">
          <Button variant={"link"}>Login</Button>
        </a>
        <a href="/register">
          <Button variant="outline">Register</Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
