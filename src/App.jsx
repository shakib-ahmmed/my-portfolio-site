import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalaxyBG from "./components/GalaxyBG";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GalaxyBG />
      <div className="relative min-h-screen flex flex-col z-10">
        <Navbar />

        <main className="flex-grow pt-16 text-left">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
