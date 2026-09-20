import React from "react";
import BookCard from "./BookCard";
import { IBook } from "@/types/bookTypes";

const getData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return res.json();
};

const Books = async () => {
  const BooksData = await getData();
  console.log(BooksData);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {BooksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
