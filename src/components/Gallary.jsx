import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { gallery } from "../Data/gallery";
const Gallary = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <hr className="hidden  md:inline-block border border-accentRed-dark lg:w-[46em] rounded-lg mx-auto self-center relative m-10" />
      <div className="w-full flex justify-center items-center ">
        <div className="font-satisfy text-[60px] text-accentRed-dark md:text-[96px] text-center">
          <h1>Gallary</h1>
        </div>
      </div>
      <div id="gallary" className="w-full flex justify-center items-center ">
        <div className="flex flex-wrap justify-center gap-4 md:max-w-[1300px] w-full p-10 ">
          {gallery.map((item) => {
            return (
              <div key={item.id} className="w-full h-auto md:w-1/4">
                <img
                  className="w-full h-[15rem] object-cover rounded-lg "
                  src={item.img}
                  alt="gallery"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="w-full flex justify-center items-center my-10">
          <Link to="" className="flex justify-center items-center gap-2">
            <p className="text-accentRed-dark text-lg">See more</p>
            {/* react arrow icon  from react icons*/}
            <FaArrowRight className="text-accentRed-dark  " />
          </Link>
        </div>
      </div>
      <hr className="hidden  md:inline-block border m-10 border-accentRed-dark lg:w-[46em] rounded-lg mx-auto self-center relative" />
    </div>
  );
};

export default Gallary;
