import React from "react";

import GameCard from "./cards/GameCard";

const GamePosts = ({title,data}) => {
 

  return (
    <>
      <section className="game_section section">
        <div className="sub">
          <h3 className="latest_posts">{title}</h3>
          <div className="game_posts">
            {data.map((item) => {
              return (
                <div key={item.name} className="game_wrapper">
                  <GameCard
                    name={item.name}
                    date={item.date}
                    image={item.image}
                    id={item.id}
                    gameName={item.gameName}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default GamePosts;
