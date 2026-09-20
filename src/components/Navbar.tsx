"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-base-100 shadow-xs">
      <div className="container navbar py-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className={`font-normal text-[18px] ${
                    pathname === "/"
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-[#131313] opacity-80"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/listed-books"
                  className={`font-normal text-[18px] ${
                    pathname === "/listed-books"
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-[#131313] opacity-80"
                  }`}
                >
                  Listed Books
                </Link>
              </li>

              <li>
                <Link
                  href="/read-page"
                  className={`font-normal text-[18px] ${
                    pathname === "/read-page"
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-[#131313] opacity-80"
                  }`}
                >
                  Pages to Read
                </Link>
              </li>
            </ul>
          </div>

          {/* large screen */}
          <Link href="/" className="font-bold  text-[28px] text-[#131313]">
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className={`font-normal text-[16px] px-2 py-1  ${
                  pathname === "/"
                    ? "text-green-500 border border-green-500 rounded-md"
                    : "text-[#131313] opacity-80"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/listed-books"
                className={`font-normal text-[16px] px-2 py-1  ${
                  pathname === "/listed-books"
                    ? "text-green-500 border border-green-500 rounded-md"
                    : "text-[#131313] opacity-80"
                }`}
              >
                Listed Books
              </Link>
            </li>
            <li>
              <Link
                href="/read-page"
                className={`font-normal text-[16px] px-2 py-1 ${
                  pathname === "/read-page"
                    ? "text-green-500 border border-green-500 rounded-md"
                    : "text-[#131313] opacity-80"
                }`}
              >
                Pages to Read
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-3 ">
          <button className=" bg-green-600 px-5 py-2 rounded-md cursor-pointer hover:bg-green-800 transition-all duration-300 text-white">
            Sign In
          </button>
          <button className=" bg-blue-500 px-5 py-2 rounded-md cursor-pointer hover:bg-blue-700 transition-all duration-300 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
