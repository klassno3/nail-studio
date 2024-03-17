import React from "react";
import contact1 from "../assets/images/contact-1.svg";
import contact2 from "../assets/images/contact-2.svg";
import contact3 from "../assets/images/contact-3.svg";
import contact4 from "../assets/images/updated-4.png";
const Contact = () => {
  return (
    <div id="contact" className="flex w-full flex-col p-10 gap-10">
      <div className=" flex justify-center text-center gap-3 w-full h-auto items-center">
        <div className="hidden md:block md:w-[127px] md:mr-10 ">
          <img src={contact1} alt="hand" />
        </div>
        <div className="font-satisfy text-[60px] md:mr-3  text-accentRed-dark md:text-[96px] ">
          <h1>Contact Info</h1>
        </div>
        <div className="hidden md:block md:w-[127px]">
          <img src={contact4} className="w-[127px]" alt="hand" />
        </div>
      </div>

      <div className="flex gap-10 w-full justify-center h-auto items-center">
        <div>
          <img className=" " src={contact2} alt="hand" />
        </div>
        <div className="flex flex-col  font-roboto">
          <p>PHONE NUMBER: 123-456-7890</p>
          <p>EMAIL: 8kxLc@example.com</p>
          <p>WORKING HOURS: 8AM - 8PM</p>
          <p>ADDRESS: 123 Main St, ADDIS ABABA ETHIOPIA</p>
        </div>
        <div>
          <img src={contact3} alt="hand" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
