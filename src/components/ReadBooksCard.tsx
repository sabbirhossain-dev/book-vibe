import React from "react";
import Image from "next/image";
import { IBook } from "@/types/bookTypes";
import RemoveButton from "./RemoveButton";

const ReadBooksCard = ({ book }: { book: IBook }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5 md:flex-row md:p-6">
        {/* Book Image */}
        <div className="flex w-full items-center justify-center rounded-xl bg-gray-100 p-6 sm:p-8 md:w-1/6">
          <Image
            src={book.image}
            alt={`${book.bookName} image`}
            width={300}
            height={200}
            unoptimized
            className="h-[180px] w-full object-contain transition-transform duration-300 hover:scale-105 sm:h-[200px]"
          />
        </div>

        {/* Book Information */}
        <div className="flex-1">
          {/* Title & Author */}
          <div className="mb-4 border-b border-gray-200 pb-4">
            <h3 className="text-2xl font-bold text-[#131313]">
              {book.bookName}
            </h3>

            <p className="mt-1 text-gray-500">
              By{" "}
              <span className="font-semibold text-[#131313]">
                {book.author}
              </span>
            </p>
          </div>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="font-semibold text-[#131313]">Tags:</span>

            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Year */}
          <p className="mb-4 text-sm text-gray-600">
            <span className="font-semibold text-[#131313]">
              Year of Publishing:
            </span>{" "}
            {book.yearOfPublishing}
          </p>

          {/* Publisher & Pages */}
          <div className="mb-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-[#131313]">Publisher:</span>{" "}
              {book.publisher}
            </p>

            <p>
              <span className="font-semibold text-[#131313]">Pages:</span>{" "}
              {book.totalPages}
            </p>
          </div>

          {/* Category & Rating */}
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              {book.category}
            </button>

            <button className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-500">
              ⭐ {book.rating}
            </button>
          </div>
        </div>
        <RemoveButton id={book.bookId} />
      </div>
    </div>
  );
};

export default ReadBooksCard;
