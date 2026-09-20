import React from "react";
import BookCard from "./BookCard";
import { IBook } from "@/types/bookTypes";

const getData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    next: { revalidate: 60 },
  });
  return res.json();
};

const Books = async () => {
  const BooksData = await getData();
  return (
    <>
      <div className="my-10">
        <h3 className="text-center pb-7 font-bold text-[40px] text-[#131313]">
          Books
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BooksData.map((book: IBook) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
