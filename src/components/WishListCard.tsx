import React from "react";
import Image from "next/image";
import { IBook } from "@/types/bookTypes";
import RemoveWishListButton from "./RemoveWishListButton";
import ReadButton from "./ReadButton";
import ViewButton from "./ViewButton";

const WishListCard = ({ book }: { book: IBook }) => {
  return (
    <div className="">
      <div className="flex h-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5">
        {/* Book Image */}
        <div className="flex w-full items-center justify-center rounded-xl bg-gray-100 p-5">
          <Image
            src={book.image}
            alt={`${book.bookName} image`}
            width={300}
            height={200}
            unoptimized
            className="h-[200px] w-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-1 flex-col">
          <div className="mb-4 border-b border-gray-200 pb-4">
            <h3 className="text-xl font-bold text-[#131313]">
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

          <div className="flex justify-between gap-5">
            {/* Category & Rating */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category */}
              <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                {book.category}
              </span>

              {/* Rating */}
              <span className="inline-flex items-center gap-1 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                <span className="text-base">★</span>
                {book.rating}
              </span>

              {/* View Button */}
              <span className="ml-5">
                <ViewButton book={book} />
              </span>
            </div>

            {/* Remove Button */}
            <div className="">
              <RemoveWishListButton id={book.bookId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
