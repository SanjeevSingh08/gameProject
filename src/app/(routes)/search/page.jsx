import React from "react";
import Fuse from "fuse.js";
import { games } from "@/app/data";
import GamePosts from "@/app/componentsfile/GamePosts";
import Search from "@/app/componentsfile/Search";

const page = ({ searchParams }) => {
  const query = searchParams.query;
  const fuse = new Fuse(games, {
    keys: ["name", "gameName", "description"],
  });
  const searchResult = fuse.search(query);
  const results = searchResult.map((result) => result.item);
 
  return (
    <div className="top-div">
    <section className="search_section">
      <Search/>
      <GamePosts title={`Search results for "${query}"`} data={results} />
    </section>
    </div>
  );
};

export default page;
