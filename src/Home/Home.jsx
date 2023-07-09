import React from "react";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Ali Barghouth</h1>
        <h3>
          And I'm a <span>Full Stack Developer</span>
        </h3>
        <p>Asp.Net | ReactJs</p>
        <div className="social-media">
          <a href="#">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <a
          href="https://docs.google.com/document/d/1GtN-jXUeS35LQUw77zqIItu8ZtK92kLiBeyO7qo9xSM/edit"
          className="button">
          Download CV
        </a>
      </div>
      <div className="home-image">
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
