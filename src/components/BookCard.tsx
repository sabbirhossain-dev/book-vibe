import { IBook } from "@/types/bookTypes";
import Image from "next/image";
import React from "react";
import ViewButton from "./ViewButton";

const BookCard = ({ book }: { book: IBook }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 cursor-grab bg-gray-50 shadow-gray-400 hover:border-green-300 hover:shadow-md transition-all duration-300">
      <div className="overflow-hidden bg-gray-200 p-7 flex justify-center items-center">
        <Image
          src={book.image}
          alt={`${book.bookName} image`}
          width={500}
          height={500}
          className="w-1/2 h-60 object-cover rounded-2xl hover:scale-105 transition-transform duration-300 "
          unoptimized
        />
      </div>

      <div className="flex flex-col gap-2 pt-5">
        <ul className="flex gap-5 pb-3 pt-2">
          {book.tags.map((tag) => {
            return (
              <li
                key={tag}
                className="text-[#23BE0A] text-[16px] font-medium bg-[rgb(235,252,228)] px-3 py-1 rounded-2xl"
              >
                {tag}
              </li>
            );
          })}
        </ul>
        <p className="font-bold text-[24px] text-[#131313]">{book.bookName}</p>
        <p className="font-medium text-[16px] opacity-80 text-[#131313] border-b border-dashed border-gray-300 pb-3">
          By: {book.author}
        </p>

        <ul className="flex justify-between gap-5 pb-7">
          <li className="font-medium text-[16px] opacity-80 text-[#131313]">
            {book.publisher}
          </li>
          <li className="font-medium text-[16px] opacity-80 text-[#131313]">
            {book.rating}
          </li>
        </ul>

        <ViewButton book={book} />
      </div>
    </div>
  );
};

export default BookCard;
