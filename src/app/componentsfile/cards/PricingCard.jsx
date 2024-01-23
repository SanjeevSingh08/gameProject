import React from "react";
import Badge from "../Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const PricingCard = ({ features, title, price }) => {
  return (
    <div className="price_card card_animate">
      <div className="price_card_sub">
        <Badge title="Standard License" />

        <h2>Starts from {price}</h2>

        <p>Per License</p>
        <div className="btn price_btn">Browse Games</div>
        <div className="widget">
          <h4>{title}</h4>
        </div>
        <ul>
          {features.map((item, i) => {
            return (
              <li key={i} className="feature_item">
                <div className="bluecircle">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
