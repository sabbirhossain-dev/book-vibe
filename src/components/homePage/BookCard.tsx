import { IBook } from "@/types/bookTypes";
import React from "react";

const BookCard = ({ book }: { book: IBook }) => {
  return (
    <div>
      <p>{book.bookName}</p>
    </div>
  );
};

export default BookCard;
