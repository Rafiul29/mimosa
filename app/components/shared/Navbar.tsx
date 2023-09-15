import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/Button";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-grey flex items-center bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-[100]">
      <div className="wrapper grid grid-cols-3 gap-20 items-center">
        {/* LEFT NAV */}
        <nav >
          <ul className="flex gap-5">
            <li>
              <Link href="/#packages" className="link-item">Packages</Link>
            </li>
            <li>
              <Link href="/" className="link-item">Link2</Link>
            </li>
            <li>
              <Link href="/" className="link-item">Link3</Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul className="flex justify-center">
            <li>
              <Link href="/" className="lowercase text-4xl font-bold text-pink">Mimosa.</Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav >
          <ul className="flex gap-5 justify-end items-center">
            <li>
              <Link href="/" className="link-item">Link4</Link>
            </li>
            <li>
              <Link href="/" className="link-item">Link5</Link>
            </li>
            <li>
              <Link href="/user/sign-in" className={buttonVariants({variant:"ocean"})}>Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
