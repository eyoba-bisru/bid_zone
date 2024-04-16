"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import image from "next/image";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product } from "../../../../types/product";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetail = () => {
  const id = useParams().id as string;
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/product?id=" + id);
        const data = await response.json();
        setLoading(false);
        setProduct(data);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="flex gap-2 justify-center items-center">
        <Skeleton className="h-[400px] w-[500px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-[250px]" />
          <Skeleton className="h-10 w-[200px]" />
        </div>
      </div>
    );

  if (error)
    return (
      <>
        <div className="mx-auto text-red-500">{error}</div>
      </>
    );

  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
      <Card className="flex justify-start items-center h-[400px] mt-10">
        <CardHeader>
          <Image
            className="rounded"
            src={product?.image as string}
            width={600}
            height={400}
            alt="shoe"
          />
        </CardHeader>

        <CardContent className="flex flex-col justify-between items-start h-full p-4">
          <div className="flex gap-6 flex-col justify-center items-start">
            <CardTitle>{product?.title}</CardTitle>
            <Badge className="bg-green-600">{product?.condition?.name}</Badge>
            <div className="text-red-500">43 sec (Today 3:11)</div>
          </div>
          <div className="max-w-[400px]">{product?.descrition}</div>
          <div className="flex gap-20 items-center">
            <div>
              <div className="font-bold">Start from ETB {product?.price}</div>
              <Input className="w-30" type="number" required />
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-sm text-muted-foreground">
                {product?.bids} bids
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
