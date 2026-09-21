"use client";
import { BooksContext } from "@/context/page";
import { IBook } from "@/types/bookTypes";
import React, { useContext } from "react";

interface ReadBookType {
  book: IBook;
}
const ReadButton = ({ book }: ReadBookType) => {
  const { setReadBooks, readBooks } = useContext(BooksContext);

  const handleReadClick = () => {
    setReadBooks((prev: IBook[]) => [...prev, book]);
    console.log("added");
    console.log(readBooks);
  };

  const isSelected = readBooks.some(
    (selectedBook: IBook) => selectedBook.bookId === book.bookId,
  );

  return (
    <button
      className={`"rounded-md border border-gray-400 px-4 py-2 text-sm font-semibold transition hover:bg-gray-100 sm:px-5 sm:py-2.5 cursor-pointer" ${isSelected ? "text-green-600 border-green-700 cursor-not-allowed" : "cursor-pointer"}`}
      onClick={handleReadClick}
      disabled={isSelected}
    >
      {isSelected ? "Saved as Read" : "Read"}
    </button>
  );
};

export default ReadButton;
