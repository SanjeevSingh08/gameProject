export const metadata = {
  title: "About Us",
  description: "All about us",
};
import GamePosts from "@/app/componentsfile/GamePosts";
import React from "react";
import { games } from "@/app/data";

const page = () => {
  return (
    <div className="top-div">
      <section className="aboutUs_section section">
        <div className="sub">
          <div className="aboutUs_content">
            <h1>About Us</h1>
            <br />
            <br />
                      {/* eslint-disable react/no-unescaped-entities  */}
            <p>
              Forestry Games is a leading game creator, publisher, and
              distributor of interactive entertainment and services, with a rich
              portfolio of world-renowned brands. The teams throughout Forestry
              Games' worldwide network of studios and business offices are
              committed to delivering original and memorable gaming experiences
              across all popular web platforms. We have over a decade of
              experience working directly with brands including Coca-Cola, SEGA,
              BBC, Sony Computer Entertainment, Nickelodeon, Disney, Cartoon
              Network, and many others brands. We work hard to create new and
              innovative game concepts unique to the brands we promote, with
              high production values that match our client's expectations. We
              are an award-winning independent game development company with a
              great reputation for creating original games with high production
              values.
              <br />
              <br />
              <br />
            </p>
            <p>
              Our company is young; however, the people at Forestry Games have
              multiple years of experience in developing and releasing top-class
              projects worldwide. The experience gained helps us in making new
              games of high quality and ones that are deeply immersive and
              interactive. We are a multidisciplinary team of designers,
              technologists, and makers. We have a unique process and proven
              track record to meet clients' needs and expectations: we research,
              plan, design, iterate and deliver engaging applications/games that
              enhance real-world experiences.
              <br />
              <br />
              <br />

            </p>

            <h4>Our Mission</h4>
            <p>
              To create web games that broaden the limits of the human
              experience that raise current questions of our time. These are
              questions of science, ecology, the relationship between humans and
              nature, cruelty, the inventiveness of modern civilization, and,
              certainly, spirituality.
              <br />
              <br />
              We take our craft seriously. Originality, Quality, Detail,
              Storytelling. It’s what we do. <br />
              We have combined all of our creative backgrounds to produce an
              experience tailored to your specific needs. <br />
              Whether it's people we work for or people who work for us, we
              value honesty, passion, and the desire to explore. <br />
            </p>
          </div>
        </div>
        <GamePosts title="All Games" data={games} />
      </section>
    </div>
  );
};

export default page;
