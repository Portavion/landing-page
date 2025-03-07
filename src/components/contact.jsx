import { useState } from "react";
import React from "react";

const initialState = {
  name: "",
  email: "",
};
export const Contact = (props) => {
  const [{ name, email }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleSubmit(event) {
    // event.preventDefault(); // Prevent default submission

    window.fbq("track", "FormSubmission");
    const myForm = event.target;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  }

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="section-title">
                <h2>Let's work on your next track</h2>
                <p>
                  Please fill out the form below and I will get back to you as
                  soon as possible.
                </p>
              </div>
              <form
                name="contact"
                data-netlify="true"
                method="POST"
                netlify-honeypot="bot-field"
                // data-netlify-recaptcha="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact" />
                {/* for honeypot */}
                <p class="hidden">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                for recaptcha
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Services:</label>
                      <select
                        name="services"
                        id="services"
                        className="form-control"
                        rows="2"
                        placeholder="Mastering"
                        required
                        onChange={handleChange}
                      >
                        <option value="mastering">Mastering</option>
                        <option value="mixingMastering">
                          Mixing and Mastering
                        </option>
                        <option value="mixing">Mixing</option>
                      </select>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Number of tracks:</label>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        className="form-control"
                        defaultValue={"1"}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Where can I listen to some of your work?</label>
                      <input
                        type="text"
                        id="streaming"
                        name="streaming"
                        className="form-control"
                        placeholder="https://soundcloud.com/sven"
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div id="success"></div>
                {/* <div data-netlify-recaptcha="true"></div> */}
                <div className="button" class="text-center">
                  <button
                    type="submit"
                    onSubmit={handleSubmit}
                    className="btn btn-custom btn-lg "
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <a
                  href="https://www.instagram.com/micronmastering/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2025 Micron Mastering.</p>
        </div>
      </div>
    </div>
  );
};
