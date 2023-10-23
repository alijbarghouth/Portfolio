import React from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
const Service = () => {
  const sr = ScrollReveal({
    duration: 2000,
    delay: 200,
    distance: "80px",
    reset: true,
  });
  useEffect(() => {
    sr.reveal(".heading");
    const head = document.getElementById("heading");
    sr.reveal(head, { origin: "top" });

    sr.reveal(".service-container");
    const content = document.getElementById("service-container");
    sr.reveal(content, { origin: "bottom" });
  }, []);
  return (
    <section className="service" id="service">
      <hr className="heading mt-5 border border-warning border-top-0 border-end-0 border-start-0 border-5 rounded-circle" />
      <h2
        className="heading mt-5 border border-warning border-top-0 border-end-0 border-start-0 border-5 rounded-circle"
        id="heading"
      >
        <div className="mb-5">
          Our <span className="fs-1 fw-bold">Service</span>
        </div>
      </h2>
      <div className="service-container" id="service-container">
        <div className="service-box">
          <i class="fa-solid fa-code"></i>
          <h3>Backend Developer</h3>
          <p>
            Using the ASP.NET framework, I develop robust and efficient
            server-side applications that handle complex business logic and data
            processing. I follow best practices in clean architecture and
            domain-driven design to ensure a well-structured and maintainable
            codebase. I am experienced in developing RESTful APIs, implementing
            authentication and authorization mechanisms using JWT, and
            integrating with databases using Entity Framework.
          </p>
          <a
            href="https://www.linkedin.com/in/alijbarghouth/"
            className="button"
          >
            Read More
          </a>
        </div>
        <div className="service-box">
          <i class="fa-solid fa-code"></i>
          <h3>FronEnd Developer</h3>
          <p>
            In the frontend, I create interactive and user-friendly interfaces
            using React. I build responsive and dynamic web applications that
            provide a seamless user experience across different devices and
            screen sizes. I leverage the power of React components, state
            management libraries like Redux, and modern JavaScript to develop
            efficient and scalable frontend solutions.
          </p>
          <a
            href="https://www.linkedin.com/in/alijbarghouth/"
            className="button"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
