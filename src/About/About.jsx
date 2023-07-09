import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about_image">
        <img
          src={require("./Images/alibarghouth.png")}
          alt=""
          className="img"
        />
      </div>
      <div className="about_content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Full Stack Developer</h3>
        <p>
          I am a skilled web developer with expertise in HTML, CSS, JavaScript,
          Bootstrap, React, ASP.NET, and MySQL. I specialize in creating
          visually appealing, responsive, and interactive web experiences. With
          a strong understanding of design patterns and object-oriented
          programming, I write efficient and maintainable code. I am committed
          to delivering high-quality web solutions that meet clients' needs
          while adhering to industry standards.
        </p>
        <a href="#" className="button">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
