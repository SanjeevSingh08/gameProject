import React from "react";
const featureData = [
  {
    icon: "kjk",
    heading: "Game for every platform",
    desc: "The cross-platform nature of HTML5 allows HTML5 games to run on the majority of devices without affecting their performance. It enables game developers to focus more on the quality of the games instead of worrying about the performance.",
  },
  {
    icon: "kjk", // Same icon for each object
    heading: "Search Premium Games",
    desc: "We deliver premium quality games, combining unique and innovative ideas with creative designs and appealing audio-visuals. We focus on exceeding your expectation and providing an incredible gaming experience to your users.",
  },
  {
    icon: "kjk", // Same icon for each object
    heading: "More Revenue",
    desc: "HTML5 games offer several innovative ways to increase your overall revenue significantly. The cross-platform compatibility of HTML5 games makes them perfect to be promoted on various platforms, which means greater revenues via in-game adverts.",
  },
  {
    icon: "kjk", // Same icon for each object
    heading: "White Label Games",
    desc: "Make our games yours by putting your logo on them. Cost-effective, proven, and results-driven games, ready to be customized to your brand for your audience. Change the graphics and anything you want in the game, add your own branding, and launch to the market fast.",
  },
  {
    icon: "kjk", // Same icon for each object
    heading: "Responsive Games",
    desc: "Our HTML5 games work on desktops, smartphones, and tablets. We design, develop and deliver addictive branded games. Tailored to your brand and budget, our HTML5 games work seamlessly across desktop and mobile to deliver the best experience for you and your audience.",
  },
  {
    icon: "kjk", // Same icon for each object
    heading: "Lifetime Support",
    desc: "We have expertise in all realms of HTML5 game development, allowing us to handle your complex projects and problems with ease. Our team will assist you throughout, starting from the conceptualization phase to the launch of the game on your platform.",
  },
];

const Features = () => {
  return (
    <section className="section features_section">
      <div className="sub">
        <div className="features_main">
          <span className="btn">Our Games</span>
          <h1>Buy HTML5 Games for your Website, App or Marketing Campaign</h1>
        

        <div className="features_group">
          <div className="features-card">
            <span className="btn"></span>
            <h2 className="feature_heading">Game for every platform</h2>
            <p>
              The cross-platform nature of HTML5, allows HTML5 games to run on
              the majority of devices without affecting their performance. It
              enables game developers to focus more on the quality of the games
              instead of worrying about the performance.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;
