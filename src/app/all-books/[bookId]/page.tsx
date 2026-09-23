import PopularBooks from "@/components/homePage/PopularBooks";
import ReadButton from "@/components/ReadButton";
import WishListButton from "@/components/WishListButton";
import { IBook } from "@/types/bookTypes";
import Image from "next/image";
import React from "react";

interface IbookId {
  params: Promise<{ bookId: string }>;
}

const getData = async () => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    next: { revalidate: 60 },
  });

  return res.json();
};

const BookDetailsPage = async ({ params }: IbookId) => {
  const { bookId } = await params;

  const booksData: IBook[] = await getData();

  const bookDetails = booksData.find(
    (book: IBook) => Number(book.bookId) === Number(bookId),
  );

  if (!bookDetails) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">Book Not Found</h2>
      </div>
    );
  }

  const {
    image,
    bookName,
    author,
    review,
    totalPage,
    rating,
    yearOfPublishing,
    publisher,
    tags,
  } = bookDetails;

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Main Card */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-10">
          {/* Image */}
          <div className="w-full md:w-5/12">
            <div className="flex h-full items-center justify-center rounded-xl bg-gray-100 p-5 sm:p-7 lg:p-8">
              <Image
                src={image}
                alt={`${bookName} image`}
                width={600}
                height={600}
                unoptimized
                className="
                  h-[280px]
                  w-full
                  object-contain
                  transition-transform
                  duration-300
                  hover:scale-105
                  sm:h-[350px]
                  md:h-[380px]
                  lg:h-[450px]
                "
              />
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-7/12">
            <div className="space-y-3 sm:space-y-4">
              {/* Book Name */}
              <h1 className="text-2xl font-bold leading-tight text-[#131313] sm:text-3xl lg:text-4xl">
                {bookName}
              </h1>

              {/* Author */}
              <p className="text-base text-gray-600 sm:text-lg">
                By{" "}
                <span className="font-semibold text-[#131313]">{author}</span>
              </p>

              <div className="border-b border-gray-200" />

              {/* Review */}
              <div>
                <h3 className="mb-1.5 text-base font-semibold text-[#131313] sm:text-lg">
                  Review
                </h3>

                <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                  {review}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="mr-1 text-sm font-semibold text-[#131313] sm:text-base">
                  Tags:
                </span>

                {tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-600 sm:px-3 sm:text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Book Information */}
              <div className="space-y-2.5 pt-2 sm:space-y-3">
                <div className="flex flex-wrap justify-between gap-2 border-b border-gray-100 pb-2">
                  <span className="text-sm text-gray-500 sm:text-base">
                    Number of Pages
                  </span>

                  <span className="text-sm font-semibold text-[#131313] sm:text-base">
                    {totalPage}
                  </span>
                </div>

                <div className="flex flex-wrap justify-between gap-2 border-b border-gray-100 pb-2">
                  <span className="text-sm text-gray-500 sm:text-base">
                    Publisher
                  </span>

                  <span className="text-right text-sm font-semibold text-[#131313] sm:text-base">
                    {publisher}
                  </span>
                </div>

                <div className="flex flex-wrap justify-between gap-2 border-b border-gray-100 pb-2">
                  <span className="text-sm text-gray-500 sm:text-base">
                    Year of Publishing
                  </span>

                  <span className="text-sm font-semibold text-[#131313] sm:text-base">
                    {yearOfPublishing}
                  </span>
                </div>

                <div className="flex flex-wrap justify-between gap-2">
                  <span className="text-sm text-gray-500 sm:text-base">
                    Rating
                  </span>

                  <span className="text-sm font-semibold text-orange-500 sm:text-base">
                    ⭐ {rating}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-4 sm:gap-3 sm:pt-5">
                <ReadButton book={bookDetails} />

                <WishListButton book={bookDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PopularBooks />
    </div>
  );
};

export default BookDetailsPage;
