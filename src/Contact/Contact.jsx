import React from "react";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
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

    sr.reveal(".contact-content");
    const content = document.getElementById("contact-content");
    sr.reveal(content, { origin: "bottom" });
  }, []);
  return (
    <div className="contact_container" id="contact">
      <hr className="heading mt-5 border border-warning border-top-0 border-end-0 border-start-0 border-5 rounded-circle" />
      <h2
        className="heading mt-5 border border-warning border-top-0 border-end-0 border-start-0 border-5 rounded-circle"
        id="heading"
      >
        <div className="mb-5">
          Contact <span className="fs-1 fw-bold">Me</span>
        </div>
      </h2>
      <section className="mb-4 contact ">
        <div className="row contact-content" id="contact-content">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              action="https://formsubmit.co/alijbarghouth@gmail.com"
              id="contact-form"
              name="contact-form"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-4">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-4">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="md-form mb-4">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="subject"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-4">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows={2}
                      className="form-control md-textarea"
                      defaultValue={""}
                      placeholder="Message"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center text-md-left">
                <Link to="/submit">
                  <button type="submit" className="button">
                    Send
                  </button>
                </Link>
              </div>
              <div className="status" />
            </form>
          </div>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0 icon">
              <li>
                <i className="fas fa-map-marker-alt fa-2x" />
                <p>Qalqilya- Palestine</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x" />
                <p>+972-599-728-416</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x" />
                <p>alijbarghouth@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer
        className="text-white text-center py-4 mt-5"
        style={{ backgroundColor: "#131726" }}
      >
        <div className="">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <p>Follow me on social media</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/alijbarghouth/"
                    className="text-white"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/alijbarghouth"
                    className="text-white"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/alijbarghouth/"
                    className="text-white"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p>&copy; {new Date().getFullYear()} Ali J Barghouth</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
