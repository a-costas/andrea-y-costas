import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
    </>
  );
}

export default App;
