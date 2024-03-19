import React from "react";
import logo from "../assets/images/Logo-white.svg";
import facebook from "../assets/images/g10.png";
import twitter from "../assets/images/Logo_1_.png";
import instagram from "../assets/images/Clip path group.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-10 p-10 w-full md:flex-row md:justify-between bg-accentRed-dark md:items-center">
      <div className="flex flex-col md:flex-row text-center md:text-start gap-4 text-lightGray items-center">
        {/* logo */}
        <span>
          <img src={logo} alt="logo" />
        </span>
        {/* description */}
        <p style={{ maxWidth: "200px" }} className="text-lightGray text-xs">
          Step into a world of beauty and elegance. Your journey to stunning
          nails begins here.Nailed It crafting perfection, one nail at a time.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-center">
        {/* title */}
        <p className="text-white text-sm font-bold">Follow us</p>
        {/* links */}
        <div className="flex gap-2 ">
          <div>
            <img src={facebook} alt="facebook" />
          </div>
          <div>
            <img src={twitter} alt="twitter" />
          </div>
          <div>
            <img src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center md:items-start">
        {/* links */}
        <p className="text-white text-sm font-bold">Help Center</p>
        <div className="text-lightGray text-sm ">
          Contact Us
        </div>
        <div className="text-lightGray text-sm ">
          Terms and Conditions
        </div>
        <div className="text-lightGray text-sm ">
          Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Footer;
