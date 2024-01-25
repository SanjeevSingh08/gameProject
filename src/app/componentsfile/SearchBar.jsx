import React from "react";
import Image from "next/image";
import pimg from "../../../public/img1.jpeg";
import Search from "./Search";

const SearchBar = () => {
  return (
    <>
    <Search/>

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
