import React from "react";

const Service = () => {
  return (
    <section className="service">
      <h1 className="heading">
        Our <span>Service</span>
      </h1>
      <div className="service-container">
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
            className="button">
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
            className="button">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
