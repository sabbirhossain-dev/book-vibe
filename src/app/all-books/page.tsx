import BookCard from "@/components/BookCard";
import { IBook } from "@/types/bookTypes";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    next: { revalidate: 60 },
  });
  return res.json();
};

const allBooks = async () => {
  const books = await getData();

  return (
    <>
      <div className="my-10 container">
        <h3 className="text-center pb-7 font-bold text-[40px] text-[#131313]">
          All Books
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {books.map((book: IBook) => (
            <BookCard key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default allBooks;
