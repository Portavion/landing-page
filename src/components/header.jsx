import React from "react";
import { useEffect } from "react";
const headerStyle = {
  width: "100%",
};
export const Header = (props) => {
  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "PageView");
    } else {
      console.error("Facebook Pixel not loaded");
    }
  });
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container" style={headerStyle}>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Work with me
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
