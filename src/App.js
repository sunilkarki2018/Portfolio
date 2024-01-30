import React from "react";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
