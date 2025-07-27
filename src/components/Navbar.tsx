import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar: React.FC = () => {
  return (
    <nav className="px-10 md:px-20 py-6 flex justify-between items-center backdrop-blur-md">
      <h1 className='font-oswald font-bold text-[1rem] md:text-2xl'>Queenimation</h1>

      <section className="md:hidden">
        <RxHamburgerMenu size={25} />
      </section>
      <section className="font-poppins sm:text-[1rem] lg:text-[1.2rem] hidden md:flex justify-between gap-10">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="contact">Contact</a>
      </section>
    </nav>
  );
};

export default Navbar;