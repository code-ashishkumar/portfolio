import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CursorDot from "./components/CursorDot";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Feed from "./components/Feed";
import Work from "./components/Work";

function App() {
  return (
    <Router>
      <CursorDot />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/feed" element={<Feed />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
