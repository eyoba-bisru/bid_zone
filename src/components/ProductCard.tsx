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

export default function ProductCard() {
  return (
    <Card>
      <CardHeader>
        <Image
          className="rounded"
          src="/shoe.jpg"
          width={400}
          height={400}
          alt="shoe"
        />
      </CardHeader>
      <CardContent>
        <div className="flex gap-6 justify-between items-center">
          <CardTitle>Nike Air Force 1 Low</CardTitle>
          <Badge className="bg-green-600">new</Badge>
        </div>

        {/* <CardDescription>
          This is a limited edition shoe from Nike, featuring a special
          &quot;Jelly Wig&quot; colorway. It has a low-top silhouette and is
          designed for casual wear.
        </CardDescription> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <div className="font-bold">ETB 2000</div>
          <div className="text-sm text-muted-foreground">10 bids</div>
        </div>
        <div className="text-red-500">43 sec (Today 3:11)</div>
      </CardFooter>
    </Card>
  );
}
