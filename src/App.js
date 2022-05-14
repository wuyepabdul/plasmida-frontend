import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Organogram from "./pages/Organogram/Organogram";
import Project from "./pages/Project/Project";

const App = () => {
  useEffect(() => {
    console.log("hello from App");
  }, []);
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/organogram" element={<Organogram />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
