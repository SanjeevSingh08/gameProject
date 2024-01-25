import GamePosts from "@/app/componentsfile/GamePosts";
import React from "react";
import { games } from "@/app/data";
const page = () => {
  return (
    <div className="top-div">
      <GamePosts title="All Games" data={games} />
    </div>
  );
};

export default page;
