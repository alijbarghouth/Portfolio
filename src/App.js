import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Submit from "./Contact/Submit";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </div>
  );
}

export default App;
