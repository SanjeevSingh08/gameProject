import React from "react";
import Badge from "./Badge";
import amazon from "../../../public/amazon.png";
import Image from "next/image";
import airbnb from "../../../public/airbnb.png";
import spotify from "../../../public/spotify.png";
import paypal from "../../../public/paypal.png";
import TestimonialCards from "./cards/TestimonialCards";
const Testimonials = () => {
  const testimonials = [
    {
      reviewer: "Cristin Morer",
      position: "Manager",
      review:
        "Thanks to the Forestry Games team for delivering an awesome game with amazing graphics tailored exactly to our project needs.",
    },
    {
      reviewer: "John Pier",
      position: "Developer",
      review:
        "We are very pleased working with Forestry Games, it was far above our expectations in terms of games.",
    },
    {
      reviewer: "Michael Doe",
      position: "Designer",
      review:
        "Will recommend you to my colleagues. I can’t say enough about forestry games.",
    },
    {
      reviewer: "Emilia Moos",
      position: "Manager",
      review:
        "Needless to say we are extremely satisfied with the results. Games were worth a fortune to my company.",
    },
    {
      reviewer: "Marry Lorean",
      position: "Senior Digital Strategist",
      review:
        "Great job, I will definitely be ordering again! It’s all good. The service was excellent.",
    },
    {
      reviewer: "Nina Pierer",
      position: "Project Manager",
      review:
        "I’d be lost without forestry games. Keep up the excellent work. Forestry games have really helped our business.",
    },
  ];

  return (
    <>
      <section className="testimonials_section section">
        <div className="sub">
          <div className="testimonials_content">
            <Badge title="Real Testimonials" />
            <h2>This Is What Our Esteemed Clients Have To Say</h2>
            <p>
              Past clients have become our friends and also close business
              partners below are some testimonials from our clients.
            </p>
          </div>
          <div className="testimonial_reviews">
            {testimonials.map((item) => {
              return (
                <TestimonialCards
                  key={item.reviewer}
                  reviewer={item.reviewer}
                  position={item.position}
                  review={item.review}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="advertize_section section">
        <div className="sub">
          <div className="advertize">
            <div className="paypal img_sub">
              <Image src={paypal} alt="paypal" fill />
            </div>
            <div className="spotify img_sub">
              <Image src={spotify} alt="spotify" fill />
            </div>
            <div className="airbnb img_sub">
              <Image src={airbnb} alt="airbnb" fill />
            </div>
            <div className="amazon img_sub">
              <Image src={amazon} alt="amazon" fill />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
