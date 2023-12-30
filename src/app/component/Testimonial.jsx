import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import p1 from "../../../public/p1.png";

const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO, ABC Company",
      review:
        "Exceptional service! The team at YourCompany went above and beyond to meet our needs. Highly recommended.",
      stars: 5,
    },
    {
      name: "Jane Smith",
      designation: "Marketing Manager, XYZ Corp",
      review:
        "Outstanding product quality and excellent customer support. A pleasure to work with!",
      stars: 4,
    },
    {
      name: "Alex Johnson",
      designation: "Freelancer",
      review:
        "YourCompany exceeded my expectations. The attention to detail and commitment to excellence are truly impressive.",
      stars: 5,
    },
    {
      name: "Emily White",
      designation: "Small Business Owner",
      review:
        "Great experience! Your products have added significant value to my business. Thank you!",
      stars: 4,
    },
    {
      name: "Chris Anderson",
      designation: "IT Professional",
      review:
        "Prompt service and top-notch quality. YourCompany is my go-to for all my tech needs.",
      stars: 5,
    },
    {
      name: "Megan Brown",
      designation: "Educator",
      review:
        "I appreciate the dedication of YourCompany&rsquo;s team. The educational resources provided are invaluable.",
      stars: 4,
    },
  ];
  return (
    <>
      <div>
        <section className="testimonials_section section">
          <div className="sub">
            <div className="test_sub">
              <div className="test_first">
                <div className="test_head">
                  <h1>Testimonials</h1>
                  <p className="hero_title ">
                    See what our customers are saying about us. Dive into their
                    stories and find out why they&rsquo;re so happy with our products
                    and services.
                  </p>
                </div>
              </div>

              <div className="test_cards">
                <div className="test_cards_sub">
                  {testimonials.map((item) => {
                    return (
                      <span key={item.name} className="t_card">
                        <p>{item.review}</p>

                        <div className="stars">
                          <FontAwesomeIcon icon={faStar} />{" "}
                          <FontAwesomeIcon icon={faStar} />{" "}
                          <FontAwesomeIcon icon={faStar} />{" "}
                          <FontAwesomeIcon icon={faStar} />{" "}
                          <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="t_last">
                          <Image src={p1} alt="person" width={48} height={48} />
                          <h5>{item.name}</h5>
                          <p className="t_des gray">{item.designation}</p>
                        </div>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="footer_section section">
        <div className="sub">
          <div className="footer">
            <div className="footer_sub">
              <h4>DONT HOLD BACK</h4>
              <h2>Be a Jedi At Your Work</h2>
              <div className="btn card_btn widget ">
                Register Now For Just Rs 299.
                <span>
                  Actual Price <span className="strike">Rs 24,789</span>
                </span>
              </div>
              <div className="footer_last">
                <p>Offer ends in: 6:51</p>
                <span>
                  🔥 54 people Registered in the last 24 hours! Don&rsquo;t miss out.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
