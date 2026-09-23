import Image from "next/image";
import React from "react";

import bannerImg from "@/../public/assets/bannerImg.png";

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#e0e0e0] p-24 rounded-2xl mt-5">
        <div className="">
          <h2 className="text-[#131313] font-bold text-[56px] mb-10">
            Books to freshen up <br /> your bookshelf
          </h2>
          <button className="text-[20px] text-[#ffffff] bg-green-600 px-5 py-2 rounded-md cursor-pointer hover:bg-green-800 transition-all duration-300">
            View The List
          </button>
        </div>

        <div className="w-[40%]">
          <Image src={bannerImg} alt="banner-img" className=""></Image>
        </div>
      </div>
    </>
  );
};

export default Banner;
