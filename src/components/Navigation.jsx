import { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";


const Navigation = () => {
  const location = useLocation();
  


  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const genericHamburgerLine = `h-[3px]  w-7 md:w-10 my-[3px] rounded-full bg-[#444] transition ease transform duration-300`;

  useEffect(() => {
    const isActive = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
      // scroll event handling logic
    };

    window.addEventListener("scroll", isActive);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  // takes it to the top when we switch pages

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
    };
  });
  return (
    <div
      className={`w-full py-3 bg-white z-40 ${
        active
          ? " shadow-xl font-poppins  fixed top-0 left-0  "
          : "fixed top-0 left-0  "
      }`}
    >

      <div className="w-11/12  md:px-8 max-w-[1440px] mx-auto flex  justify-between items-center">
        <RouterLink to="/" className="lg:w-1/7 cursor-pointe">
          <img className=" w-10 md:w-16" src={Logo} alt="" />
        </RouterLink>

          <div className="hidden md:flex  font-roboto tracking-wider font-semibold uppercase md:text-sm lg:text-base items-end  ">
          <div className="flex lg:w-1/2 md:gap-7 lg:gap-10 items-end  ">
            <Link
              to="hero"
              activeClass="current"
              smooth={true}
              spy={true}
              offset={-150}
              className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
            >
              Home
            </Link>
            <Link
              to="services"
              activeClass="current"
              smooth={true}
              spy={true}
              offset={-150}
              className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
            >
              Services
            </Link>
            <Link
              to="gallary"
              activeClass="current"
              smooth={true}
              spy={true}
              offset={-150}
              className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
            >
              Gallary
            </Link>

            <Link
              to="contact"
              activeClass="current"
              smooth={true}
              spy={true}
              offset={-150}
              className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
            >
              Contact
            </Link>
          </div>
        
        </div>
        
        <div
          ref={divEl}
          className="flex justify-end items-center gap-5 relative md:hidden"
        >
          {/* mobile menu */}
        
        
           
         
          
            <button
              className="flex flex-col h-12 w-z  rounded justify-center items-center group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={` transition-all duration-500 ${genericHamburgerLine}
           ${
             isOpen
               ? "rotate-[405deg] translate-y-[6px]   group-hover:scale-105"
               : " group-hover:-translate-y-[3px]"
           }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={` transition-all duration-300 ${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-[45deg]  -translate-y-[12px]  group-hover:scale-105"
                    : " group-hover:translate-y-[2px]"
                }`}
              />
            </button>
          
        </div>
      </div>

      <div
        className={`z-50  shadow-md transition-all duration-300 flex justify-center pt-32 absolute overflow-x-hidden h-screen translate-x-0  w-3/4  top-[71.5px] ${
          active ? " bg-white/95" : " bg-white/95"
        } ${isOpen ? "lg:hidden right-0 " : "-right-full"}`}
      >
        <div className="flex font-roboto font-semibold uppercase text-base">
           
         

         
            <div className="flex flex-col gap-5">
              <Link
                onClick={() => setIsOpen(false)}
                to="hero"
                activeClass="current"
                smooth={true}
                spy={true}
                offset={-150}
                className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
              >
                Home
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="services"
                activeClass="current"
                smooth={true}
                spy={true}
                offset={-150}
                className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
              >
                Services
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="gallary"
                activeClass="current"
                smooth={true}
                spy={true}
                offset={-150}
                className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
              >
                Gallary
              </Link>
              <Link
                onClick={() => setIsOpen(false)}
                to="contact"
                activeClass="current"
                smooth={true}
                spy={true}
                offset={-150}
                className=" relative cursor-pointer z-10 transition-all bg-[-100%] duration-500 bg-[length:200%_100%] text-transparent bg-text-gradient bg-clip-text hover:bg-[0%]"
              >
                Contact
              </Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};
export default Navigation;
