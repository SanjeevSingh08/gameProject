import React from "react";

const Featured = () => {
  return (
    <>
      <section className="featured_section section">
        <div className="sub">
          <div className="f_content">
            <div className="featured_content">
              <h2>Check out the newest HTML5 games from our game library</h2>
              <p>Trusted By Thousands of Customers Worldwide</p>
            </div>
          </div>

          <section className="poster_section section ">
            <h3 >Featured Game</h3>
            <div className="poster_section_sub">
              <div className="poster_background"></div>
              <div className="poster_content">
                <h2>Frozen Rush - HTML5 Adventure Running Game</h2>

                <div className="btn">License Game</div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Featured;
