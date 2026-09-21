import React from "react";
import Banner from "@/components/homePage/Banner";
import Books from "@/components/homePage/PopularBooks";

const page = () => {
  return (
    <>
      <div className="container">
        <Banner />
        <Books />
      </div>
    </>
  );
};

export default page;
