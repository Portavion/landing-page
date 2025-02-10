import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Selected Works</h2>
          <p></p>
        </div>
        <iframe
          width="840"
          height="473"
          src="https://www.youtube.com/embed/iho8--uno6A?si=dx-J1FUopbARGn6S"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dKogthXJuOA?si=13HO4nD2cZUGzQ0h"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/If8qt38Zx28?si=52oLEvfn1N0sp2yl"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style={{ paddingBottom: "40px" }}
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VtTkwEMMYMM?si=dBvLyFXHSmYy8xQU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="row"></div>
      </div>
    </div>
  );
};
