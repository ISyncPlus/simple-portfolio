import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="px-10 md:px-20 py-6 flex justify-between items-center fixed w-screen z-50 backdrop-blur-md">
      <h1 className='font-oswald font-bold text-[1.3rem] md:text-2xl'>Queenimation</h1>

    {/* mobile nav buttons */}
      <section className="md:hidden">
        <RxHamburgerMenu className={`${open ? 'rotate-180 opacity-0 pointer-events-none' : 'scale-y-100 pointer-events-auto'} duration-300 md:hidden transform translate-y-5`} size={30} onClick={() => setOpen(true)}/>
        <GrClose size={35} className={`${!open ? 'opacity-0 pointer-events-none' : 'opacity-100 rotate-360 pointer-events-auto'} duration-300 md:hidden transform -translate-y-4`} onClick={() => setOpen(false)}/>
      </section>

      {/* mobile menu */}
      <section className={`${open ? 'scale-y-100' : 'scale-y-0'} flex flex-col items-center gap-10 transform origin-top-right transition-all duration-300 absolute top-28 right-3 text-xl bg-[#222833]/90 shadow-3xl px-13 py-10 rounded-3xl`}>
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </section>

      {/* Desktop view */}
      <section className="font-poppins sm:text-[1rem] lg:text-[1.2rem] hidden md:flex justify-between gap-10">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#contact">Contact</a>
      </section>
    </nav>
  );
}