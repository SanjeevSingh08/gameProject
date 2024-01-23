import React from "react";

import GameCard from "./cards/GameCard";
import { games } from "../data";
const GamePosts = ({title}) => {
 

  return (
    <>
      <section className="game_section section">
        <div className="sub">
          <h3 className="latest_posts">{title}</h3>
          <div className="game_posts">
            {games.map((item) => {
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
