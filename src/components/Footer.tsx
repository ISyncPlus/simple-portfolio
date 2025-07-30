import { AiOutlineHome } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandTwitter } from "react-icons/tb";
import { SlSocialYoutube } from "react-icons/sl";

export default function Footer() {
  return (
    <footer>
      <hr  className="text-[#00ADB5] flex justify-self-center w-[50%] mb-20"/>

      <section className="flex justify-center items-center gap-15 font-light mb-10">
        <a href="#home" className="flex gap-3 font-light text-xl">
          <AiOutlineHome size={25}/> <p className="hidden md:inline">Home</p>
        </a>

        <a href="#about" className="flex items-center gap-3 text-xl">
          <RiContactsLine size={25} stroke="#222831"/> <p className="hidden md:inline">About Me</p>
        </a>

        <a href="#contact" className="flex items-center gap-3 text-xl">
          <IoCallOutline size={25}/> <p className="hidden md:inline">Contact</p>
        </a>
      </section>

      <section className="flex justify-center items-center gap-10">
        <LuFacebook className=" bg-[#393E46] rounded-full p-3 cursor-pointer" size={50}/>
        <FaInstagram className=" bg-[#393E46] rounded-full p-3 cursor-pointer" size={50}/>
        <TbBrandTwitter className=" bg-[#393E46] rounded-full p-3 cursor-pointer" size={50}/>
        <SlSocialYoutube className=" bg-[#393E46] rounded-full p-3 cursor-pointer" size={50}/>
      </section>
      

      <p className="flex justify-center md:justify-self-end px-8 text-[#EEEEEEBF] pt-20 pb-10">Terms of Service - Privacy Policy</p>
      
    </footer>
  );
}