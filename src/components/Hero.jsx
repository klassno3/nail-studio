import React from 'react'
import { Link } from 'react-router-dom'
import HeroPic from "../assets/images/hero.jpg"
const Hero = () => {
  return (
    <div id="hero" className="pt-24 mb-10 bg-accentRed-dark text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="pl-7 md:pl-10 lg:pl-20  lg:w-1/3 flex flex-col items-start gap-3 md:gap-5 lg:gap-5 py-[83px]">
          <div className="flex flex-col gap-3">

          <h1 className="uppercase text-2xl leading-12 md:text-3xl lg:text-4xl xl:text-6xl font-bold tracking-wide ">
            Polished Perfection, Every Time!
          </h1>
          <p className="font-roboto text-white/85 text-sm md:text-base">Experience flawless nail services that leave you feeling confident and beautiful.</p>
          </div>
          <Link to='/book-now' className='hover:scale-105 transition-all duration-500 uppercase tracking-wide border-2 lg:text-lg font-roboto font-semibold border-white rounded-full px-8 py-2.5 '>
            Book Now
          </Link>
        </div>
        <div className="flex justify-end">
          <img src={HeroPic} alt="Hero pic" className="w-[96%]" />
        </div>
    </div>
    </div>
  )
}

export default Hero
