"use client";

import { BooksContext } from "@/context/page";
import { IBook } from "@/types/bookTypes";
import React, { useContext } from "react";

interface ReadBookType {
  book: IBook;
}

const ReadButton = ({ book }: ReadBookType) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("BooksProvider is missing");
  }
  const { setReadBooks, readBooks } = context;
  const isSelected = readBooks.some(
    (selectedBook: IBook) => selectedBook.bookId === book.bookId,
  );

  const handleReadClick = () => {
    setReadBooks((prev: IBook[]) => {
      const updatedBooks = [...prev, book];

      console.log("Added:", book);
      console.log("Read Books:", updatedBooks);

      return updatedBooks;
    });
  };

  return (
    <button
      className={`rounded-md border px-4 py-2 text-sm font-semibold transition sm:px-5 sm:py-2.5 ${
        isSelected
          ? "cursor-not-allowed border-green-600 bg-green-50 text-green-700 opacity-80"
          : "cursor-pointer border-gray-400 text-gray-700 hover:bg-gray-100"
      }`}
      onClick={handleReadClick}
      disabled={isSelected}
    >
      {isSelected ? "✓ Saved as Read" : "Read"}
    </button>
  );
};

export default ReadButton;
