import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { auth } from "@/auth";
import Search from "./Search";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center px-4">
      <Link href="/" passHref>
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
      </Link>

      <Search />

      <div className="flex items-center">
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={session?.user?.image as string} />
                <AvatarFallback>E</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link href="/api/auth/signout">
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link href="/api/auth/signin">
            <Button variant={"link"}>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
