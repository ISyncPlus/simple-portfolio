import Button from "./Button";
import Project from "../components/Project";
import P_1 from '../img/project 1.png'
import P_2 from '../img/project 2.png'
import P_3 from '../img/project 3.png'
export default function Works() {
  return (
    <section className="px-8 py-20 md:pt-30 bg-projects">
      <h1 className="text-3xl font-bold mb-5">
        My Recent <span className="text-[#00ADB5]">Works</span> 
      </h1>

      <div className="text-xs flex items-center gap-2 mb-8 md:mb-5">
        <Button variant="primary">All</Button>
        <Button variant="special" className="">UI</Button>
        <Button variant="special">UX</Button>
        <Button variant="special">Web Design</Button>
      </div>

      <figure className="flex md:flex-row flex-col items-center gap-10">
        <Project className="md:p-8 flex justify-center items-center">
          <img src={P_1} alt="project 1" className="active:scale-95 md:hover:scale-95 hover:cursor-pointer transition-all duration-300 w-[70%]"/>
        </Project>

        <Project className="flex items-center justify-center">
          <img src={P_2} alt="project 2" className="active:scale-95 md:hover:scale-95 hover:cursor-pointer transition-all duration-300 w-[70%]"/>
        </Project>

        <Project className="flex items-center justify-center">
          <img src={P_3} alt="project 3" className="active:scale-95 md:hover:scale-95 hover:cursor-pointer transition-all duration-300 w-[70%]"/>
        </Project>

      </figure>



    </section>
  );
}