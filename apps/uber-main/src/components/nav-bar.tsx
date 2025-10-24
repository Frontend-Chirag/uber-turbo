import React from "react";
import Link from "next/link";
import { FaCar, FaKey } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-neutral-200">
      <div className="max-w-[1792px] mx-auto">
        <header className="relative flex items-center justify-between h-[60px] px-6 lg:px-16">
          {/* Left nav */}
          <nav className="flex h-full">
            <ul className="flex items-center gap-2 h-full pt-2">
              {/* Logo */}
              <li>
                <Link href="/" className="font-uber-medium text-[28px] mr-16">
                  Uber
                </Link>
              </li>
              {/* Nav links */}
              <li className="h-full flex items-center">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-4 text-sm font-uber-medium h-full relative"
                >
                  <FaCar className="size-5" />
                  Ride
                  {/* underline that aligns with parent border */}
                  <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-black" />
                </Link>
              </li>
              <li className="h-full flex items-center">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-4 text-sm font-uber-medium h-full"
                >
                  <FaKey className="size-5" />
                  Rent
                </Link>
              </li>
              <li className="h-full flex items-center">
                <Link
                  href="/"
                  className="flex items-center gap-2 px-4 text-sm font-uber-medium h-full"
                >
                  <ImSpoonKnife className="size-5" />
                  Eat
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-2 text-black hover:bg-neutral-100 font-uber-medium text-[14px] rounded-full"
            >
              Login
            </Link>
            <Link
              href="/"
              className="px-3 py-2 bg-black text-white font-uber-medium text-[14px] rounded-full"
            >
              Sign up
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
};
