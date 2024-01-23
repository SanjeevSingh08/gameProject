import React from "react";
import Badge from "./Badge";
import PricingCard from "./cards/PricingCard";

const Pricing = () => {
  const pricingOptions = [
    {
      price: "$29",
      title: "Default use. Designed for medium-sized projects.",
      features: [
        "Game Source Code Included",
        "Use The Game Only In 1 Project",
        "Change Anything In The Game",
        "World-Wide Usage",
        "License Agreement For Branded Games",
        "Lifetime Updates",
        "Valid For Lifetime",
        "World-Wide Usage",
      ],
    },
    {
      price: "$199",
      title: "More advanced use, suitable for big-sized projects.",
      features: [
        "Game Source Code Included",
        "Use The Game Upto In 10 Projects",
        "Change Anything In The Game",
        "World-Wide Usage",
        "Create An End Product",
        "License Agreement For Branded Games",
        "Lifetime Updates",
        "Valid For Lifetime",
        "World-Wide Usage",
      ],
    },
    {
      price: "$399",
      title: "The most advanced use for huge projects.",
      features: [
        "Game Source Code Included",
        "Use The Game In Unlimited Projects",
        "Change/Add Anything In The Game",
        "World-Wide Usage",
        "Create An End Product",
        "License Agreement For Branded Games",
        "Lifetime Updates",
        "Host Games on our CDN - Free for Lifetime",
        "Valid For Lifetime",
        "World-Wide Usage",
      ],
    },
  ];

  return (
    <>
      <section className="pricing_section section">
        <div className="sub">
          <div className="pricing_content">
            <Badge title="Forestry Games Video" />
            <h2>
              Forestry Games Offers Really Simple Licensing Options To Cover
              Every Business Usage.
            </h2>
            <p>
              We offer 3 licenses for every business need. All licenses are
              valid for a lifetime. Prices are different for each game. Visit
              our game shop to see the prices of the games.
            </p>
          </div>
          <div className="pricing_charts">
            {pricingOptions?.map((item) => {
              return (
                <PricingCard
                  key={item.price}
                  title={item.title}
                  price={item.price}
                  features={item.features}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="numbers_section section">
        <div className="sub">
          <div className="numbers">
            <div className="num">
              <div className="num_content">
                <h2>1000+</h2>
                <p>Games in Library</p>
              </div>
            </div>
            <div className="num">
              <div className="num_content">
                <h2>286+</h2>
                <p>Global Presence</p>
              </div>
            </div>
            <div className="num">
              <div className="num_content">
                <h2>29000+</h2>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="num">
              <div className="num_content">
                <h2>185+</h2>
                <p>Recognitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
