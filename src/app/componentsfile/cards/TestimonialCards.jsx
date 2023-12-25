import React from "react";
import Image from "next/image";
import person1 from "../../../../public/person1.png";
const TestimonialCards = ({ review, reviewer, position }) => {
  return (
    <div className="test_card card_animate">
      <div className="test_card_sub">
        
        <p>{review}</p>
        <div className="person">
          <div className="person_image">
            <Image src={person1} alt="person" width={60} height={60} />
          </div>
          <div className="person_name">
            <h4>{reviewer}</h4>
            <p>{position}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TestimonialCards;
