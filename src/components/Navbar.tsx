import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import Search from "./Search";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkRole } from "@/utils/roles";

const Navbar = async () => {
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

      <div className="flex items-center justify-center gap-4">
        {checkRole("admin") && (
          <Link href="/admin/dashboard" passHref>
            <Button variant="outline">Admin</Button>
          </Link>
        )}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
