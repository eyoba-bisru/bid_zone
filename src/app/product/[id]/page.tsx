"use client";
import { useParams } from "next/navigation";
import React, { Suspense } from "react";
import products from "@/lib/data.json";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import image from "next/image";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const id = useParams().id as string;

  const product = products.find((product) => product.id === parseInt(id));
  if (!product) return <div>no product</div>;

  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
      <Navbar />

      <Card className="flex justify-start items-center h-[400px] mt-10">
        <CardHeader>
          <Image
            className="rounded"
            src={product.image}
            width={600}
            height={400}
            alt="shoe"
          />
        </CardHeader>

        <CardContent className="flex flex-col justify-between items-start h-full p-4">
          <div className="flex gap-6 flex-col justify-center items-start">
            <CardTitle>{product.title}</CardTitle>
            <Badge className="bg-green-600">{product.condition}</Badge>
            <div className="text-red-500">43 sec (Today 3:11)</div>
          </div>
          <div className="max-w-[400px]">{product.descrition}</div>
          <div className="flex gap-20 items-center">
            <div>
              <div className="font-bold">Start from ETB {product.price}</div>
              <Input className="w-30" type="number" required />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-sm text-muted-foreground">
                {product.bids} bids
              </div>
              <Button>Place Bid</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Footer />
    </div>
  );
};

export default ProductDetail;
