"use client";

import ReadBooksCard from "@/components/ReadBooksCard";
import { BooksContext } from "@/context/page";
import { IBook } from "@/types/bookTypes";
import React, { useContext } from "react";

const ListedPage = () => {
  const context = useContext(BooksContext);

  if (!context) {
    return <p>BooksProvider not found</p>;
  }

  const { readBooks } = context;

  console.log("Read Books:", readBooks);

  return (
    <div className="container py-10">
      <button className="font-bold btn rounded-r-none">Read Books</button>
      <button className="font-bold btn rounded-l-none">Wishlist Books</button>

      {readBooks.length === 0 ? (
        <p className="text-red-500 text-center">No read books found.</p>
      ) : (
        <div className="flex flex-col gap-5 my-10">
          {readBooks.map((book: IBook) => (
            <ReadBooksCard key={book.bookId} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListedPage;
