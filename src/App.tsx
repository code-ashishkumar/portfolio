import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./components/About";
import CursorDot from "./components/CursorDot";
import Feed from "./components/Feed";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <Router>
      <CursorDot />
      <Navbar />
      <div className="xsm:pt-14 sm:pt-16 md:pt-14 pt-8">
        <Routes>

          <Route path="/" element={<Landing />} />
          <Route path="/feed" element={<Feed />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
