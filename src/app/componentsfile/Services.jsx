import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faSearch,
  faChartBar,
  faLaptop,
  faMobileAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./cards/ServiceCard";
import Badge from "./Badge";

const gameDevelopmentInfo = [
  {
    title: "Game for every platform",

    des: "The cross-platform nature of HTML5 allows HTML5 games to run on the majority of devices without affecting their performance. It enables game developers to focus more on the quality of the games instead of worrying about the performance.",
    icon: <FontAwesomeIcon icon={faChartPie} />,
  },
  {
    title: "Search Premium Games",
    des: "We deliver premium quality games, combining unique and innovative ideas with creative designs and appealing audio-visuals. We focus on exceeding your expectation and providing an incredible gaming experience to your users.",
    icon: <FontAwesomeIcon icon={faSearch} />,
  },
  {
    title: "More Revenue",
    des: "HTML5 games offer several innovative ways to increase your overall revenue significantly. The cross-platform compatibility of HTML5 games makes them perfect to be promoted on various platforms, which means greater revenues via in-game adverts.",
    icon: <FontAwesomeIcon icon={faChartBar} />,
  },
  {
    title: "White Label Games",
    des: "Make our games yours by putting your logo on them. Cost-effective, proven, and results-driven games, ready to be customized to your brand for your audience. Change the graphics and anything you want in the game, add your own branding, and launch to the market fast.",
    icon: <FontAwesomeIcon icon={faLaptop} />,
  },
  {
    title: "Responsive Games",
    des: "Our HTML5 games work on desktops, smartphones, and tablets. We design, develop and deliver addictive branded games. Tailored to your brand and budget, our HTML5 games work seamlessly across desktop and mobile to deliver the best experience for you and your audience.",
    icon: <FontAwesomeIcon icon={faMobileAlt} />,
  },
  {
    title: "Lifetime Support",
    des: "We have expertise in all realms of HTML5 game development, allowing us to handle your complex projects and problems with ease. Our team will assist you throughout, starting from the conceptualization phase to the launch of the game on your platform.",
    icon: <FontAwesomeIcon icon={faPhone} />,
  },
];

const Services = () => {
  return (
    <section className="services_section section">
      <div className="sub">
        <div className="widget">
          <div className="content_badge">
            <Badge title="Our Game" />
          </div>
        </div>
        <div className="widget Text">
          <h2 className="title">
            Buy HTML5 Games for your Website, App or Marketing Campaign
          </h2>
        </div>
        <div className="row_services">
          <div className="row_division">
            {gameDevelopmentInfo.map((item) => {
              return (
                <div className="card" key={item.title}>
                  <ServiceCard
                    title={item.title}
                    des={item.des}
                    icon={item.icon}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
