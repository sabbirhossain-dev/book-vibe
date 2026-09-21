"use client";
import { IBook } from "@/types/bookTypes";
// import { IBook } from "@/types/bookTypes";
import Link from "next/link";
import React from "react";

interface ViewButtonProps {
  book: IBook;
}
const ViewButton = ({ book }: ViewButtonProps) => {
  return (
    <>
      <Link href={`/all-books/${book.bookId}`}>
        <button className="btn btn-neutral mt-7">View More</button>
      </Link>
    </>
  );
};

export default ViewButton;
