"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Product } from "../../../../types/product";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import useTimer from "@/hooks/useTimer";

const ProductDetail = () => {
  const id = useParams().id as string;
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bidRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const timer = useTimer(new Date(product?.bidFinish));

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

  const handleBid = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (bidRef.current) {
        await fetch("/api/bid", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: id,
            amount: bidRef.current.value,
          }),
        });
      }

      bidRef.current!.value = "";
      setIsLoading(false);

      setLoading(true);
      const response = await fetch("/api/product?id=" + id);
      const data = await response.json();
      setLoading(false);
      setProduct(data);

      setLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setLoading(false);

      toast({
        title: error.message,
      });
    }
  };

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
    <div className="flex flex-col justify-between min-h-screen p-4 border max-w-[1800px] mx-auto">
      <Card className="flex flex-col md:flex-row justify-start items-center min-h-[400px] mt-10">
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
          <div className="flex mb-8 gap-6 flex-col justify-center items-start">
            <CardTitle>{product?.title}</CardTitle>
            <Badge className="bg-green-600">{product?.condition?.name}</Badge>
            <div className="text-red-500">
              {timer == "0" ? "end" : timer}
              {timer != "0" && (
                <div>
                  Will be finished at {}{" "}
                  {new Date(product?.bidFinish).toDateString() +
                    " " +
                    new Date(product?.bidFinish).toLocaleString().slice(11, 18)}
                </div>
              )}
            </div>
          </div>
          <div className="max-w-[400px] mb-8">{product?.descrition}</div>
          <div className="flex items-center flex-col">
            <div className="flex justify-start items-center gap-20">
              <div className="font-bold">Start from ETB {product?.price}</div>
              <div className="text-sm text-muted-foreground">
                {product?.bids} bids
              </div>
            </div>
            <form
              onSubmit={handleBid}
              className="flex justify-center items-center gap-10"
            >
              <Input
                disabled={isLoading}
                className="w-30"
                type="number"
                required
                ref={bidRef}
              ></Input>
              <Button>
                {isLoading ? <span className="loader mr-2"></span> : ""} Place
                Bid
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      <Footer />
    </div>
  );
};

export default ProductDetail;
