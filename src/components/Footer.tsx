import Image from "next/image";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex justify-center items-center my-4">
      <div className="text-sm font-bold">
        © 2023 BidZone. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
