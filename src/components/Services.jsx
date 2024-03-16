import React from "react";

const Services = () => {
  return (
    <div className="relative flex flex-wrap gap-6  items-center justify-center">
      <div className="flex flex-col gap-4 md:flex-row shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg p-4 w-[20em] items-center md:shadow-none md:w-9/12 md:justify-around 2xl:gap-24 2xl:w-4/5 2xl:justify-center">
        <div className="w-[15em] md:w-[26em]">
          <img
            className="mt-4 ml-2 shadow-[-24px_-24px_0px_0px_#FAECDF] size-full rounded-md"
            src={require("../assets/images/manicure_img.png")}
            alt="manicure"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-start gap-4 p-1 max-w-[30em]">
          <h1 className="text-3xl text-accentRed-dark md:text-[3em] font-satisfy font-medium">
            Manicure
          </h1>
          <p className="font-roboto text-[#6F6D6D]">
            Select the manicure of your choice and additional services for your
            personal style.
          </p>
          <button className="uppercase text-accentRed-dark border border-accentRed-dark p-2 w-[9em] rounded-[1.5em] font-light text-sm hover:bg-accentRed-dark hover:text-white transition-colors duration-500 ease-in-out hover:shadow-md">
            Book now
          </button>
        </div>
      </div>
      <hr className="hidden md:inline-block border border-accentRed-dark w-[46em] rounded-lg" />
      <div className="flex flex-col gap-4  md:flex-row-reverse shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-lg p-4 w-[20em] items-center md:shadow-none md:w-9/12 md:justify-around 2xl:gap-24 2xl:w-4/5 2xl:justify-center">
        <div className="w-[15em] md:w-[26em]">
          <img
            className="mt-4 ml-2 shadow-[-24px_-24px_0px_0px_#FAECDF] rounded-md"
            src={require("../assets/images/spa_pedicure_img.png")}
            alt="manicure"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-start gap-4 p-1 max-w-[30em]">
          <h1 className="mb-4 text-3xl text-accentRed-dark md:text-[3em] font-satisfy font-medium">
            Spa pedicure
          </h1>
          <p className="font-roboto text-[#6F6D6D]">
            Choose from our five relaxing pedicures and add your choice of add
            ons for tip to toes perfection!
          </p>
          <button className="uppercase text-accentRed-dark border border-accentRed-dark p-2 w-[9em] rounded-[1.5em] font-light text-sm hover:bg-accentRed-dark hover:text-white transition-colors duration-500 ease-in-out hover:shadow-md">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
