"use client";

import { BooksContext } from "@/context/page";
import { IBook } from "@/types/bookTypes";
import { useContext } from "react";

interface WishListButtonProps {
  book: IBook;
}

const WishListButton = ({ book }: WishListButtonProps) => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("BooksProvider is missing");
  }
  const { wishList, setWishList } = context;

  const isSelected = wishList.some(
    (selectedBook: IBook) => selectedBook.bookId === book.bookId,
  );

  const handleWishList = () => {
    if (isSelected) return;

    setWishList((prev: IBook[]) => [...prev, book]);
  };

  return (
    <button
      onClick={handleWishList}
      disabled={isSelected}
      className={`rounded-md px-4 py-2 text-sm font-semibold text-white ${
        isSelected
          ? "cursor-not-allowed bg-gray-400"
          : "cursor-pointer bg-green-600 hover:bg-green-700"
      }`}
    >
      {isSelected ? "Added ✓" : "Wishlist"}
    </button>
  );
};

export default WishListButton;
