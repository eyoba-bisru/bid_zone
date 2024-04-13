import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";

type ProductCardProps = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  condition: string;
  bids: number;
};

export default function ProductCard({
  id,
  title,
  image,
  price,
  condition,
  bids,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} passHref>
      <Card>
        <CardHeader>
          <Image
            className="rounded"
            src={image}
            width={400}
            height={400}
            alt="shoe"
          />
        </CardHeader>
        <CardContent>
          <div className="flex gap-6 justify-between items-center">
            <CardTitle>{title}</CardTitle>
            <Badge className="bg-green-600">{condition}</Badge>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <div className="font-bold">ETB {price}</div>
            <div className="text-sm text-muted-foreground">{bids} bids</div>
          </div>
          <div className="text-red-500">43 sec (Today 3:11)</div>
        </CardFooter>
      </Card>
    </Link>
  );
}
