import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-between p-4 border">
      <nav className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Image src="/logo.svg" width={54} height={54} alt="logo" />
          <h4 className="text-sm">BidZone</h4>
        </div>

        <form className="flex justify-center items-center gap-2">
          <Select>
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
          </Select>

          <Input placeholder="Search by category" className="w-[450px]" />

          <Button type="submit">Search</Button>
        </form>

        <div>
          <a href="/login">
            <Button variant={"link"}>Login</Button>
          </a>
          <a href="login">
            <Button variant="secondary">Register</Button>
          </a>
        </div>
      </nav>
    </div>
  );
}
