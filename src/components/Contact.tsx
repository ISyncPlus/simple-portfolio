import figure from '../img/contact figure.png';
import doodle_1 from '../doodles/left contact doodle.png';
import keyboard from '../doodles/keyboard doodle.png'
import mail from '../doodles/mail doodle.png'
import Button from './Button';
import { FaTelegramPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-col md:flex-row items-center px-8 py-30">

      <figure className="md:flex-1 w-full">
        <h1 className="text-4xl font-bold mb-3">Got a Project in <span className="text-[#00ADB5]">Mind?</span> </h1>

        <div className="flex items-center">

          <img src={doodle_1} alt="pointer" className="w-[30%] mr-5"/>
          <img src={figure} alt="figure" className="w-[40%]"/>

        </div>
      </figure>

      <form className='md:flex-1 w-screen pl-8 pr-25'>
        <img src={keyboard} alt="keyboard" className="w-[25%] mb-15 ml-10" />

        <section className="flex flex-col md:flex-row md:items-center gap-3 mb-3">

          <div>
            <label htmlFor="name" className="block mb-2">Your Name</label>
            <input type="text" name="name" placeholder='Name' className="bg-[#393E4680] px-5 py-3 rounded-2xl font-bold"/>
          </div>

          <div>
            <label htmlFor="email" className="block mb-3">Your Email</label>
            <input type="email" name="email" placeholder='Email' className='bg-[#393E4680] px-5 py-3 rounded-2xl font-bold' />
          </div>

        </section>

        

        <label htmlFor="message" className='block mb-3'>Your Message</label>
        <textarea name="message" placeholder="Message" className='bg-[#393E4680] rounded-2xl p-3 block mb-5 font-bold w-full h-40' ></textarea>

        <Button variant="primary" type="submit" className="">Send Message <FaTelegramPlane className="inline"/></Button>

        <img src={mail} alt="mail" className="transform translate-x-90 mt-5 w-[10%]" />

      </form>


    </section>
  );
}