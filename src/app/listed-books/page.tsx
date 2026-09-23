// "use client";

// import ReadBooksCard from "@/components/ReadBooksCard";
// import { BooksContext } from "@/context/page";
// import { IBook } from "@/types/bookTypes";
// import React, { useContext } from "react";

// const ListedPage = () => {
//   const context = useContext(BooksContext);

//   if (!context) {
//     return <p>BooksProvider not found</p>;
//   }

//   const { readBooks } = context;

//   console.log("Read Books:", readBooks);

//   return (
//     <div className="container py-10">
//       {/* <button className="font-bold btn rounded-r-none">Read Books</button>
//       <button className="font-bold btn rounded-l-none">Wishlist Books</button> */}

//       <div role="tablist" className="tabs tabs-lift">
//         <a role="tab" className="tab">
//           Read Books
//         </a>
//         <a role="tab" className="tab tab-active">
//           Wishlist
//         </a>
//       </div>

//       {readBooks.length === 0 ? (
//         <p className="text-red-500 text-center">No read books found.</p>
//       ) : (
//         <div className="flex flex-col gap-5 my-10">
//           {readBooks.map((book: IBook) => (
//             <ReadBooksCard key={book.bookId} book={book} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListedPage;

"use client";

import ReadBooksCard from "@/components/ReadBooksCard";
import WishListCard from "@/components/WishListCard";
import { BooksContext } from "@/context/page";
import { IBook } from "@/types/bookTypes";
import React, { useContext, useState } from "react";

const ListedPage = () => {
  const context = useContext(BooksContext);

  const [activeTab, setActiveTab] = useState<"read" | "wishlist">("read");

  if (!context) {
    return <p>BooksProvider not found</p>;
  }

  const { readBooks, wishList } = context;

  const books = activeTab === "read" ? readBooks : wishList;

  return (
    <div className="container py-10">
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-lift">
        <button
          role="tab"
          onClick={() => setActiveTab("read")}
          className={`tab ${activeTab === "read" ? "tab-active" : ""}`}
        >
          Read Books
        </button>

        <button
          role="tab"
          onClick={() => setActiveTab("wishlist")}
          className={`tab ${activeTab === "wishlist" ? "tab-active" : ""}`}
        >
          Wishlist
        </button>
      </div>

      {/* Books */}
      {books.length === 0 ? (
        <p className="mt-10 text-center text-red-500">
          {activeTab === "read"
            ? "No read books found."
            : "No wishlist books found."}
        </p>
      ) : (
        <div
          className={`${activeTab === "read" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} grid py-10 gap-5`}
        >
          {books.map((book: IBook) =>
            activeTab === "read" ? (
              <ReadBooksCard key={book.bookId} book={book} />
            ) : (
              <WishListCard key={book.bookId} book={book} />
            ),
          )}
        </div>
      )}
    </div>
  );
};

export default ListedPage;
