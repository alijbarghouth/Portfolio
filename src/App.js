import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
