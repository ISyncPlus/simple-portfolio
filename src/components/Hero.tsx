import React from 'react';
import heroVector from '../assets/heroVector.svg'
import heroDoodles from '../doodles/heroDoodles.png'
import heroFigure from '../img/heroFigure.png'
import { MdOutlineFileDownload } from "react-icons/md";
import Button from './Button';
const Hero: React.FC = () => {
  return (
    <main className="sm:px-5 lg:px-10 flex flex-col-reverse md:flex-row justify-center items-center mb-25">
      <section className="flex justify-center font-poppins sm:w-[60%]">

        <div>
          <img src={heroVector} alt="doodle" className="w-8 sm:w-25 transform lg:translate-y-5 xl:translate-y-6 -translate-x-3"/>
        </div>

        <article>
        <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold md:leading-15 xl:leading-20 mb-5 sm:mb-10">CREATIVE UI <span className="text-[#00ADB5]">DESIGNER</span></h1>

        <div className="flex">
          <Button variant="primary" className='mr-5 text-sm xl:text-xl'>Hire me</Button>
          <Button variant="secondary" className="text-xs xl:text-xl">Download CV <MdOutlineFileDownload className="inline" size={25}/> </Button>
        </div>

        </article>

      </section>

      <figure className="relative flex justify-center">
        <img src={heroDoodles} alt="hero doodle" className="w-[60%] sm:w-[85%] lg:w-full"/>
        <img src={heroFigure} alt="hero figure"  className="absolute top-20 sm:top-35 sm:right-27 w-[40%] sm:w-[50%] lg:w-[60%] xl:w-[80%]"/>
      </figure>
    </main>
  );
};

export default Hero;