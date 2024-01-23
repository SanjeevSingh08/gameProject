import React from "react";
import { games } from "@/app/data";
import Image from "next/image";

import GamePosts from "@/app/componentsfile/GamePosts";
import HtmlContent from "@/app/componentsfile/HtmlContent";
import Link from "next/link";
const page = ({ params }) => {
  const gameId = params.gameId.split("-")[0];

  const selectedGame = games.find((game) => game.id === gameId);

  return (
    <section className="screen_section ">
      <div className="screen_section_sub">
        <div className="game_background_image">
          {" "}
          <Image
            alt={selectedGame.name}
            src={`/games/${selectedGame.gameName}.png`}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="screento_content">
          <h1>{selectedGame.name}</h1>
        </div>
      </div>
      <div className="game_preview_page sub ">
        <div className="gamepreview_wrapper">
          <iframe
            className="gamepreview"
            title="Game"
            width="100%"
            src={`https://gameshosted.vercel.app/${selectedGame.gameName}`}
            allowFullScreen
          ></iframe>
        </div>
        <div className="game_buttons">
          <Link
            href={`https://gameshosted.vercel.app/${selectedGame.gameName}`}
          >
            <div className="btn">Game Preview</div>
          </Link>
          <Link href={`/buy`}>
            <div className="btn">Buy Now</div>
          </Link>
        </div>
        <div className="game_description">
          <HtmlContent data={selectedGame.description} />
        </div>
        <div className="game_preview_img">
          <Image
            src={`/games/${selectedGame.gameName}.png`}
            alt={selectedGame.name}
            fill
          />
        </div>
      </div>
      <GamePosts title="Recommended Games" />
    </section>
  );
};

export default page;
