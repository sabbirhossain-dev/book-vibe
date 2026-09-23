import { BooksContext } from "@/context/page";
import { IBook } from "@/types/bookTypes";
import React, { useContext } from "react";

const RemoveWishListButton = ({ id }: { id: number }) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error("BooksProvider is missing");
  }
  const { wishList, setWishList } = context;

  const handleWishListRemove = () => {
    const afterDelete = wishList.filter((book: IBook) => book.bookId !== id);
    setWishList(afterDelete);
  };
  return (
    <div>
      <button
        className="
    group
    inline-flex
    h-9
    items-center
    justify-center
    gap-1.5
    rounded-lg
    border
    border-red-200
    bg-red-50
    px-4
    text-sm
    font-semibold
    text-red-500
    transition-all
    duration-300
    hover:border-red-300
    hover:bg-red-500
    hover:text-white
    hover:shadow-sm
    active:scale-95
    cursor-pointer
  "
        onClick={handleWishListRemove}
      >
        <span className="transition-transform duration-300 group-hover:rotate-90">
          ×
        </span>
        Remove
      </button>
    </div>
  );
};

export default RemoveWishListButton;
