import { useRef } from "react";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/About/Skills";
import Contact from "./Components/Footer/Contact";
import Achievements from "./Components/About/Achievements";

function App() {
  const footerRef = useRef(null);

  const handleContactClick = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar handleContactClick={handleContactClick} />
      <Home onContactClick={handleContactClick} />
      <About />
      <Skills />
      <Achievements />
      <Experience />
      <Projects />
       <Contact />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
