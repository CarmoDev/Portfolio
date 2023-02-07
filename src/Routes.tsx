import { Routes, Route } from "react-router-dom";

import Hero from "./Pages/Hero";
import AboutMe from "./Pages/AboutMe";
import Projects  from "./Pages/Projects";
import Contact from "./Pages/Contact";

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
