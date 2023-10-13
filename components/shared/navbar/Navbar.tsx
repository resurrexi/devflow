import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between gap-5 bg-neutral-100 p-6 shadow-neutral-400 dark:bg-neutral-900 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="DevFlow"
        />
        <p className="text-2xl font-bold leading-8 text-neutral-900 dark:text-neutral-100 max-sm:hidden">
          Dev <span className="text-primary-700">Overflow</span>
        </p>
      </Link>
      GlobalSearch
      <div className="flex items-center justify-between gap-5">
        Theme
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
