import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import SkillsDisplay from "./components/SkillsDisplay";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <About />
        <SkillsDisplay />
        <ProjectsSection />
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

/*
1. flex-grow : make an element grow to take up available space inside a flex container

2. min-h-screen flex flex-col
sets, minimum height to 100vh. enables flexbox making the div a flex container, arranges child elements vertically
*/
