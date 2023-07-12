import React from "react";
import ScrollReveal from "scrollreveal";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const About = () => {
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
    sr.reveal(".about_image");
    const img = document.getElementById("about_image");
    sr.reveal(img, { origin: "top" });

    sr.reveal(".about_content");
    const content = document.getElementById("about_content");
    sr.reveal(content, { origin: "bottom" });
  }, []);
  return (
    <section className="about">
      <div className="about_image" id="about_image">
        <img
          src={require("./Images/alibarghouth.png")}
          className="img"
        />
      </div>
      <div className="about_content" id="about_content">
        <h2 className="heading" id="heading">
          About <span className="fs-1 fw-bold">Me</span>
        </h2>
        <span ref={typedRef}></span>
        <p>
          I am a skilled web developer with expertise in HTML, CSS, JavaScript,
          Bootstrap, React, ASP.NET, and MySQL. I specialize in creating
          visually appealing, responsive, and interactive web experiences. With
          a strong understanding of design patterns and object-oriented
          programming, I write efficient and maintainable code. I am committed
          to delivering high-quality web solutions that meet clients' needs
          while adhering to industry standards.
        </p>
        <a href="https://www.linkedin.com/in/alijbarghouth/" className="button">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
