import React from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import aboutimage from "../../../public/about.png";
import Badge from "./Badge";

const AboutGames = () => {
  return (
    <>
      <section className="about_section section">
        <div className="sub">
          <div className="about_partition">
            <div className="image_about">
              <div className="image_about_sub ff">
                <Image src={aboutimage} fill alt="about" />
              </div>
            </div>
            <div className="about_content">
              <Badge title="About Company" />
              <h2 className="about_title">About Games</h2>
              <h5>
                Forestry Games is a leading game creator, publisher, and
                distributor of interactive entertainment and services, with a
                rich portfolio of world-renowned brands. The teams throughout
                Forestry Games worldwide network of studios and business
                offices are committed to delivering original and memorable
                gaming experiences across all popular web platforms.
              </h5>
              <div className="progress">
                <div className="progress_title">
                  <h4>Digital Strategy</h4>
                  <span>55%</span>
                </div>
                <Progress className="" value={55} />
              </div>
              <div className="progress">
                <div className="progress_title">
                  <h4>Seo Optimization</h4>
                  <span>75%</span>
                </div>
                <Progress value={75} />
              </div>
              <div className="progress">
                <div className="progress_title">
                  <h4>Game Development</h4>
                  <span>68%</span>
                </div>
                <Progress value={68} />
              </div>
              <div className="progress">
                <div className="progress_title">
                  <h4>Social Media Marketing</h4>
                  <span>50%</span>
                </div>
                <Progress value={50} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="screen2_section section">
        <div className="screen_section_sub">
          <div className="background_image2"></div>
          <div className="screen_content2">
            <h4 className="game_title">
              150 Games Published on Forestry Games
            </h4>
            <Badge title="Foresty Game Video" />
            <h2 className="game_sub_title">We Love What We Do!</h2>
            <p className="game_des">
              Partner with a talented community of digital brands and global
              community. Forestry Games is the Backbone Of Several Major
              Networks.
            </p>
            <div className="btn2">Learn More</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutGames;
