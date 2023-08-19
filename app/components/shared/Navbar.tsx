import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="h-20 border-gray flex items-center bg-white">
      <div>
        {/* LEFT NAV */}
        <nav>
          <ul>
            <li>
              <Link href="/">Link1</Link>
            </li>
            <li>
              <Link href="/">Link2</Link>
            </li>
            <li>
              <Link href="/">Link3</Link>
            </li>
          </ul>
        </nav>
        {/* MID NAV */}
        <nav>
          <ul>
            <li>
              <Link href="/">Mimosa</Link>
            </li>
          </ul>
        </nav>
        {/* RIGHT NAV */}
        <nav>
          <ul>
            <li>
              <Link href="/">Link1</Link>
            </li>
            <li>
              <Link href="/">Link2</Link>
            </li>
            <li>
              <Link href="/user/sign-in">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
