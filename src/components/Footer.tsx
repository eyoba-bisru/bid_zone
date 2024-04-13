import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center lg:flex-row">
        <Image
          src="/logo.svg"
          className="w-10 h-10 lg:w-20 lg:h-20"
          width={54}
          height={54}
          alt="logo"
        />
        <h4 className="text-lg">BidZone</h4>
      </div>
      <div className="flex justify-center items-center mb-10">
        <div className="text-xl font-bold">
          Discover amazing deals through bidding
        </div>
      </div>
      <form className="hidden lg:flex justify-center items-center gap-2 mb-8">
        <Input
          className="rounded-3xl w-[250px]"
          placeholder="Enter your email"
          type="email"
        />
        <Button className="rounded-3xl" type="submit">
          Try Now
        </Button>
      </form>
      <div className="flex justify-center items-center mb-10">
        <div className="text-sm font-bold">
          © 2023 BidZone. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
