import React from "react";
import { games } from "@/app/data";
import GamePosts from "@/app/componentsfile/GamePosts";

const Page = () => {
  return (
    <div className="top-div">
      <section className="contactUs-section section">
        <div className="sub">
          <form className="w-full max-w-xl mx-auto p-8 bg-black rounded-lg shadow-md">
            <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
              <div className="w-full px-3  md:mb-0">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2 text-white"
                  htmlFor="first-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-[#FFFFFF1F] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2 text-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-[#FFFFFF1F] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="jane.doe@example.com"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2 text-white"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-[#FFFFFF1F] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                  id="message"
                  rows="5"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-4 md:mb-6">
              <div className="w-full px-3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <GamePosts title="All Games" data={games} />
    </div>
  );
};

export default Page;
