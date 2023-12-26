import React from "react";

import GameCard from "./cards/GameCard";
const GamePosts = () => {
  const games = [
    {
      name: "Looney Tunes - Acme Rocket Dash",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "fdf" with the actual image URL or filename
    },
    {
      name: "Toon Cup 2018 - HTML5 Sports Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "fef" with the actual image URL or filename
    },
    {
      name: "OK K.O.! Let's Be Heroes - Parking Lot Wars - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "abc" with the actual image URL or filename
    },
    {
      name: "Spot The Difference - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "xyz" with the actual image URL or filename
    },
    {
      name: "Downhill Dash 2 - Scooby Doo - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "123" with the actual image URL or filename
    },
    {
      name: "Mighty Magiswords Game - Double Trouble In Mirror Castle - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "456" with the actual image URL or filename
    },
    {
      name: "Be Cool Scooby Doo Its Dark Out There - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "789" with the actual image URL or filename
    },
    {
      name: "Adventure Time Elemental - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "def" with the actual image URL or filename
    },
    {
      name: "Mojo Mayhem - HTML Flying Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "ghi" with the actual image URL or filename
    },
    {
      name: "Tom And Jerry - What's The Catch - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "jkl" with the actual image URL or filename
    },
    {
      name: "Night Begins To Shine - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "mno" with the actual image URL or filename
    },
    {
      name: "The Amazing World Of Gumball Game - Swing Out - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "pqr" with the actual image URL or filename
    },
    {
      name: "Raven's Rainbow Dreams - License HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "stu" with the actual image URL or filename
    },
    {
      name: "Dorothy And The Wizard Of Oz - Run Dorothy - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "vwx" with the actual image URL or filename
    },
    {
      name: "The Tom And Jerry - Broom Riders - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "yz1" with the actual image URL or filename
    },
    {
      name: "Carrot Crisis - Looney Tunes - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "234" with the actual image URL or filename
    },
    {
      name: "Cats Gone Bats - Tom And Jerry - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "567" with the actual image URL or filename
    },
    {
      name: "Drop 'Em, Scooby! - Scooby Doo - HTML5 Game",
      date: "5/24/2023",
      image: "rocket.jpg", // Replace "890" with the actual image URL or filename
    },
  ];

  return (
    <>
      <section className="game_section section">
        <div className="sub">
          <h3 className="latest_posts">Latest Posts</h3>
          <div className="game_posts">
            {games.map((item) => {
              return (
                <div key={item.name} className="game_wrapper">
                  <GameCard
                    name={item.name}
                    date={item.date}
                    image={item.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="screen3_section  ">
        <div className="screen_section_sub last-screen">
          <div className="background_image3"></div>
          <div className="screen_content3">
            <h2 className="game_sub_title">
              Start Your Journey to Better Business
            </h2>
            <p className="game_des">
              Make the Right Choice for Your Future. Choose Forestry Games!
            </p>
            <div className="btn">Browse Games</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamePosts;
