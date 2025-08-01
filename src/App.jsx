import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <main>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/projects" element={<Project></Project>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
