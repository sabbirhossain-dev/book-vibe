import { IBook } from "@/types/bookTypes";
import Image from "next/image";
import React from "react";

const ReadBooksCard = ({ book }: { book: IBook }) => {
  return (
    <>
      <div className="">
        <div className="flex gap-5 border border-gray-300 p-5">
          <div className="w-1/6 bg-gray-200 p-8">
            <Image
              src={book.image}
              alt={`${book.bookName} image`}
              width={300}
              height={200}
              unoptimized
            ></Image>
          </div>

          <div>
            <h3>{book.bookName}</h3>
            <p>By: {book.author}</p>

            <ul>
              {book.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
              <li>Year of Publishing: {book.yearOfPublishing}</li>
            </ul>

            <div>
              <p>Publisher: {book.publisher}</p>
              <p>Page {book.totalPage}</p>
            </div>

            <button>Category: {book.category}</button>
            <button>Rating: {book.rating}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBooksCard;
