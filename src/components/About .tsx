import Lightbulb from '../doodles/lightbulb.png'
import AboutDoodle from '../doodles/about doodle grp.png'
import AboutFigure from '../doodles/about figure.png'
import Music from '../doodles/music doodle.png'
import Point from '../doodles/about point doodle.png'
import { RiZzzLine } from "react-icons/ri";
export default function About() {
  return (
    <section id="about" className="flex md:flex-row flex-col justify-between items-center 
    px-10 py-30">
      <article className="flex flex-col flex-1 relative">

           <img src={Music} alt="music" className="absolute -top-20 w-[10%]" />

           <img src={Point} alt="pointer"  className="w-[20%] absolute top-60 right-50"/>

        <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
          <h1 className="font-bold text-3xl md:text-5xl text-left">About <span className="text-[#00ADB5]">Me</span></h1>

          <img src={Lightbulb} alt="bulb" className="w-9 md:w-15"/>
        </div>

        <p className="text-sm mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur corrupti nam voluptas ut eius nisi placeat, commodi accusantium vitae dolorem ipsum provident veritatis beatae repellat, ipsa eligendi. Suscipit, sapiente rem.
        Dolores doloremque vitae quod debitis minus soluta facilis eum quasi modi, doloribus repudiandae hic a incidunt iusto eligendi sit. Suscipit ad ut nihil quia veritatis possimus dicta corporis deserunt? Repellat.</p>

      </article>

      <figure className="flex-1 relative flex md:justify-end">
        <img src={AboutDoodle} alt="doodle" className="w-[90%]"/>
        <img src={AboutFigure} alt="figure" className="absolute md:top-25 md:right-0 top-30 left-15 w-[40%] sm:w-[50%] lg:w-[70%]" />
        <RiZzzLine className='text-white absolute right-50 top-25'  size={40}/>
      </figure>
      
    </section>
  );
}