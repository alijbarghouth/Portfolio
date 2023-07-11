import React from "react";

const Contact = () => {
  return (
    <section className="mb-4 contact">
      <h2 className="heading h1-responsive font-weight-bold text-center my-4">
        Contact <span>Me</span>
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        do you have questions? Please do not hesitate to contact me directly
      </p>
      <div className="row contact-content">
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label htmlFor="name" className>
                    Your name
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label htmlFor="email" className>
                    Your email
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label htmlFor="subject" className>
                    Subject
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows={2}
                    className="form-control md-textarea"
                    defaultValue={""}
                  />
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>
          </form>
          <div className="text-center text-md-left">
            <a
              className="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();">
              Send
            </a>
          </div>
          <div className="status" />
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x" />
              <p>Qalqilya- Palestine</p>
            </li>
            <li>
              <i className="fas fa-phone mt-4 fa-2x" />
              <p>+972599728416</p>
            </li>
            <li>
              <i className="fas fa-envelope mt-4 fa-2x" />
              <p>alijbarghouth@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
