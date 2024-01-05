"use client";

import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {oo} from "../Provider/ContextProvider";
import { faXmark } from "@fortawesome/free-solid-svg-icons";


export default function Overlay({ youtubeKey }: any) {
    console.log("on")
  const { overlay, setOverlay } = useContext(oo);
//   function NavbarIndex() {
//     const navbar = document.querySelector(".Navbar");
//     const fade = document.querySelector(".fade");
//     if (navbar !== null) {
//       navbar.classList.add("index");
//     }
//     if (fade !== null) {
//       fade.classList.add("index");
//     }
//   }
//   NavbarIndex();

//   function removeIndex() {
//     const navbar = document.querySelector(".Navbar");
//     const fade = document.querySelector(".fade");
//     if (navbar !== null) {
//       navbar.classList.remove("index");
//     }
//     if (fade !== null) {
//       fade.classList.remove("index");
//     }
//   }

  return (
    <div className={!overlay ? "k-overlay " : "k-overlay "}>
      <div className="yt-overlay">
        <div className="yt-title">
          <div
            onClick={() => {
              setOverlay(false);
            //   removeIndex();
            }}
          >
          <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
        {/* <div className="yt-sub">
          
          <iframe className="iframe"width="100%" height="100%" src={`https://www.youtube.com/embed/${trailerKeys[0]}`} title={`Trailer`}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

</iframe></div> */}
        {/* {youtubeKey ? (
          <div className="yt-sub">
            <iframe
              className="iframe"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeKey}`}
              title={`Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <YoutubeOverlay />
        )} */}
            <div className="yt-sub">
            <iframe
              className="iframe"
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${youtubeKey}`}
              title={`Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
      </div>
    </div>
  );
}
