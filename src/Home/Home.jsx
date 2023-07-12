import React from "react";
import ScrollReveal from "scrollreveal";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "Backend  Developer",
        "Frontend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const sr = ScrollReveal({
    duration: 2000,
    delay: 200,
    distance: "80px",
    reset: true,
  });
  useEffect(() => {
    sr.reveal(".home-content,");
    const home = document.getElementById("home-content");
    sr.reveal(home, { origin: "top" });

    sr.reveal(".home-image,");
    const img = document.getElementById("home-image");
    sr.reveal(img, { origin: "bottom" });

    sr.reveal(".name,");
    const name = document.getElementById("name");
    sr.reveal(name, { origin: "left" });

    sr.reveal(".pargraph,");
    const pargraph = document.getElementById("pargraph");
    sr.reveal(pargraph, { origin: "rigth" });
  }, []);
  return (
    <section className="home" id="home">
      <div className="home-content" id="home-content">
        <h3>Hello, It's Me</h3>
        <h1 className="name" id="name">
          Ali Barghouth
        </h1>
        <h3 className="pargraph" id="pargraph">
          And I'm a <span ref={typedRef}></span>
        </h3>
        <p>Asp.Net | ReactJs</p>
        <div className="social-media">
          <a href="https://www.facebook.com/alijbarghouth">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/alijbarghouth/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/alijbarghouth">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://github.com/alijbarghouth">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <a
          href="https://docs.google.com/document/d/1GtN-jXUeS35LQUw77zqIItu8ZtK92kLiBeyO7qo9xSM/edit"
          className="button">
          Download CV
        </a>
      </div>
      <div className="home-image" id="home-image">
        <img
          src={require("./Images/alibarghouth.png")}
          className="img"
          alt="photo"
          height="400px"
        />
      </div>
    </section>
  );
}

export default Home;
