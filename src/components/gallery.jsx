import React from "react";
import "@justinribeiro/lite-youtube";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Selected Works</h2>
          <p></p>
        </div>
        <div style={{ width: "840px", margin: "auto", marginBottom: "40px" }}>
          <lite-youtube
            videotitle="Tyler Loyal - Ferrari"
            videoid="iho8--uno6A"
            posterquality="maxresdefault"
          ></lite-youtube>
        </div>
        <div style={{ width: "840px", margin: "auto", marginBottom: "40px" }}>
          <lite-youtube
            videotitle="Soul Baby Dali - Pull Out"
            videoid="dKogthXJuOA"
            posterquality="maxresdefault"
          ></lite-youtube>
        </div>
        <div style={{ width: "840px", margin: "auto", marginBottom: "40px" }}>
          <lite-youtube
            videotitle="Tyler Loyal - Coi"
            videoid="If8qt38Zx28"
            posterquality="maxresdefault"
          ></lite-youtube>
        </div>
        <div style={{ width: "840px", margin: "auto", marginBottom: "40px" }}>
          <lite-youtube
            videotitle="Tyler Loyal - I'm Still"
            videoid="VtTkwEMMYMM"
            posterquality="maxresdefault"
          ></lite-youtube>
        </div>
      </div>
    </div>
  );
};
