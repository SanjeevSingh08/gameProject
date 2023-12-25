import React from "react";
import Image from "next/image";
import pimg from "../../../public/img1.jpeg";
const SearchBar = () => {
  return (
    <>
      <section className="section search_section">
        <div className="sub">
          <div className="search_main">
            <form
              className="search_form"
              id="inner_search_form"
              action="/search?language=en-US"
              method="get"
              acceptCharset="utf-8"
            >
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>

              <input type="hidden" name="language" value="en-US" />
              <label>
                <input
                  className="search_bar"
                  dir="auto"
                  id="inner_search_v4"
                  type="text"
                  tabIndex="1"
                  autoCorrect="off"
                  autoCapitalize="off"
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="150 Games Published On Forestry Games"
                />
              </label>
              <input className="btn search_btn" type="submit" value="Search" />
            </form>
          </div>
        </div>
      </section>

      <section className="section popular_section">
        <div className="sub">
          <h2 className="heading popular_heading">Popular Games</h2>
          <div className="game_card">
            <div className="p_card">
              <div className="p_img">
                <Image
                  src={pimg}
                  alt="fdf"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p_info">
                <h4>Frojen Rush</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores, fugit?
                </p>
              </div>
            </div>
            <div className="p_card">
              <div className="p_img">
                <Image
                  src={pimg}
                  alt="fdf"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p_info">
                <h4>Frojen Rush</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores, fugit?
                </p>
              </div>
            </div>
            <div className="p_card">
              <div className="p_img">
                <Image
                  src={pimg}
                  alt="fdf"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p_info">
                <h4>Frojen Rush</h4>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores, fugit?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
