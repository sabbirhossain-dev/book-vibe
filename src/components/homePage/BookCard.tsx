import { IBook } from "@/types/bookTypes";
import Image from "next/image";
import React from "react";

const BookCard = ({ book }: { book: IBook }) => {
  return (
    <div className="border border-gray-200 rounded-md p-5">
      <div>
        <Image
          src={book.image}
          alt={`${book.bookName} image`}
          width={500}
          height={500}
        ></Image>
      </div>

      <div className="flex flex-col gap-3">
        <p>{book.bookName}</p>
        <p>By: {book.author}</p>

        <ul className="flex justify-between gap-5">
          <li>{book.publisher}</li>
          <li>{book.rating}</li>
        </ul>
      </div>
    </div>
  );
};

export default BookCard;
