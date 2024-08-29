import "./App.css";
import CursorDot from "./components/CursorDot";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="hoverable ">
      <CursorDot />
      <Navbar />
      <Landing />
      <div className="text-mask"></div>
    </div>
  );
}

export default App;
