import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from "./components/About ";
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <html className="scroll-smooth bg-[#222831] text-white min-h-screen max-w-7xl mx-auto font-poppins">
      <Navbar/>
      <Hero/>
      <About/>
      <Works/>
      <Contact/>
      <Footer/>
    </html>
  );
}