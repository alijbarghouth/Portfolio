import React from "react";

const Portfolio = () => {
  return (
    <section className="protfolio">
      <h1 className="heading">
        Latest <span>Project</span>
      </h1>
      <div className="protfolio-container">
        <div className="portofolio-box">
          <img
            src={require("./Images/Library_Management_System.jpg")}
            alt="Library Management System photo"
          />
          <div className="portofolio-layer">
            <h4>Library Management System</h4>
            <p>
              Libro is a comprehensive Book Management System designed to
              facilitate the easy management and discovery of books.
              <p className="text-info">
                Technology used : Asp.Net- C# for Back-end, SSMS for DB
              </p>
            </p>
            <a href="https://github.com/alijbarghouth/LibraryManagementSystem">
              <i class="fa-solid fa-link fa-beat fa-lg"></i>
            </a>
          </div>
        </div>

        <div className="portofolio-box">
          <img
            src={require("./Images/school.png")}
            alt="Library Management System photo"
          />
          <div className="portofolio-layer">
            <h4>Graduation Project</h4>
            <p>
              My graduation project, The project is affiliated to the Ministry
              of Education in Palestine. (Thesis and Presentation){" "}
              <p className="text-info">
                Technology used : Asp.Net- C# for Back-end, Reactjs for
                front-End, SSMS for DB Note : repo is private you can view Video
              </p>
            </p>
            <a href="https://www.youtube.com/watch?v=bxirhTU7uX8&t=2s">
              <i class="fa-solid fa-link fa-beat fa-lg"></i>
            </a>
          </div>
        </div>
        <div className="portofolio-box">
          <img
            src={require("./Images/E Commerce System.jpg")}
            alt="Library Management System photo"
          />
          <div className="portofolio-layer">
            <h4>E Commerce System </h4>
            <p>
              My Project using Asp.net api Frameworks contains CRUDS operations
              and Authentication and Authorization using Token(json web Token)
              and using fluent validation and filter and pagination.
              <p className="text-info">
                Technology used : Asp.Net- C# for Back-end, SSMS for DB
              </p>
            </p>
            <a href="https://github.com/alijbarghouth/E-Commerce-System">
              <i className="fa-solid fa-link fa-beat fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
