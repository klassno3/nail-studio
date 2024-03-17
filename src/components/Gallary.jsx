import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import GallaryOne from "../assets/images/gallary-1.png"
import GallaryTwo from "../assets/images/gallary-2.png"
import GallaryThree from "../assets/images/gallary-3.png"
import GallaryFour from "../assets/images/gallary-4.png"
import GallaryFive from "../assets/images/gallary-5.png"
import GallarySix from "../assets/images/gallary-6.png"
import GallarySeven from "../assets/images/gallary-7.png"
import GallaryEight from "../assets/images/gallary-8.png"
import GallaryNine from "../assets/images/gallary-9.png"
const Gallary = () => {
  return (
    <div id= "gallary" className="w-9/12 mx-auto flex flex-col justify-center items-center my-10">
      <hr className="hidden  md:inline-block border border-accentRed-dark lg:w-[46em] rounded-lg mx-auto self-center relative m-10" />
      <div className="w-full flex justify-center items-center ">
        <div className="font-satisfy text-[60px] text-accentRed-dark md:text-[96px] text-center">
          <h1>Gallary</h1>
        </div>
      </div>
        <div className="grid grid-cols-4 gap-3 grid-row-5 pt-5">
         
        <div className="col-start-1 col-end-2 row-start-1 row-span-2">
        <img src={GallaryOne} alt="" className="rounded-2xl h-full" />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-span-3">
                  <img src={GallaryTwo} alt="" className="rounded-2xl h-full" />

          </div>
        <div className="col-start-3 col-span-2 row-span-2">
                  <img src={GallaryThree} alt="" className="rounded-2xl h-full" />

          </div>
        <div className="col-start-1  row-span-1">
                            <img src={GallaryFour} alt="" className="rounded-2xl h-full" />

          </div>
        <div className="col-start-3  row-span-2">
                            <img src={GallaryFive} alt="" className="rounded-2xl h-full" />

          </div>
        <div className="col-start-4  row-span-2">
                            <img src={GallarySix} alt="" className="rounded-2xl h-full" />

          </div>
        <div className="col-start-1 col-span-2 row-span-2">
                            <img src={GallarySeven} alt="" className="rounded-2xl h-full" />

          </div>
        <div className="col-start-3  row-span-1">
                            <img src={GallaryEight} alt="" className="rounded-2xl h-full" />

          </div>
        <div className="col-start-4  row-span-1">
                            <img src={GallaryNine} alt="" className="rounded-2xl h-full" />

          </div>
        </div>
      <div>
        <div className="w-full flex justify-center items-center my-8">
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
