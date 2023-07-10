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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto veniam delectus ut, quam eligendi, dolorum
              reprehenderit molestias optio rem corrupti quisquam? Iusto, ipsum
              ab neque delectus eius tempore accusantium perferendis!
            </p>
            <a href="#">
              <i class="fa-solid fa-link fa-beat fa-lg"></i>
            </a>
          </div>
        </div>
        <div className="portofolio-box">
          <img
            src={require("./Images/Library_Management_System.jpg")}
            alt="Library Management System photo"
          />
          <div className="portofolio-layer">
            <h4>Library Management System</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto veniam delectus ut, quam eligendi, dolorum
              reprehenderit molestias optio rem corrupti quisquam? Iusto, ipsum
              ab neque delectus eius tempore accusantium perferendis!
            </p>
            <a href="#">
              <i class="fa-solid fa-link fa-beat fa-lg"></i>
            </a>
          </div>
        </div>
        <div className="portofolio-box">
          <img
            src={require("./Images/Library_Management_System.jpg")}
            alt="Library Management System photo"
          />
          <div className="portofolio-layer">
            <h4>Library Management System</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto veniam delectus ut, quam eligendi, dolorum
              reprehenderit molestias optio rem corrupti quisquam? Iusto, ipsum
              ab neque delectus eius tempore accusantium perferendis!
            </p>
            <a href="#">
              <i class="fa-solid fa-link fa-beat fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
