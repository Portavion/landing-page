import React from "react";

const logoStyle = {
  // width: "200px",
  // height: "200px",
  margin: "0 32px",
  opacity: 0.8,
};

const containerStyle = {
  marginBottom: "50px",
};

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Trusted by the bests</h2>
        </div>

        <div className="row" style={containerStyle}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-4 col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <img
                    className="logoImage"
                    src={d.largeImage}
                    // className="img-responsive"
                    style={logoStyle}
                    alt={d.title}
                  />{" "}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
