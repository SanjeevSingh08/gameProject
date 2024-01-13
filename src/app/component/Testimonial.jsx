"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";

import pe1 from "../../../public/pe1.png";
import pe2 from "../../../public/pe2.png";
import pe3 from "../../../public/pe3.png";
import { oo } from "../Provider/ContextProvider";
import Overlay from "../overlay/Overlay";
import Timer from "../component/Timer";
const Testimonial = () => {
  const ownerPhoneNumber = "+917506659099"; // Replace with the owner's phone number
  const prefilledMessage = "Hi! I am interested.";

  const whatsappUrl = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;
  const { overlay, setOverlay } = useContext(oo);

  const testimonials = [
    {
      name: "John Doe",
      designation: "CEO, ABC Company",
      review:
        "Exceptional service! The team at YourCompany went above and beyond to meet our needs. Highly recommended.",
      stars: 5,
      img: pe1,
      ytkey: "GczS00Pqq84",
    },
    {
      name: "Jane Smith",
      designation: "Marketing Manager, XYZ Corp",
      review:
        "Outstanding product quality and excellent customer support. A pleasure to work with!",
      stars: 4,
      img: pe2,
      ytkey: "DIFCMtzg7xg",
    },
    {
      name: "Alex Johnson",
      designation: "Freelancer",
      review:
        "YourCompany exceeded my expectations. The attention to detail and commitment to excellence are truly impressive.",
      stars: 5,
      img: pe3,
      ytkey: "cvb49-Csq1o",
    },
    {
      name: "Emily White",
      designation: "Small Business Owner",
      review:
        "Great experience! Your products have added significant value to my business. Thank you!",
      stars: 4,
      img: pe1,
      ytkey: "",
    },
    {
      name: "Chris Anderson",
      designation: "IT Professional",
      review:
        "Prompt service and top-notch quality. YourCompany is my go-to for all my tech needs.",
      stars: 5,
      img: pe2,
      ytkey: "",
    },
    {
      name: "Megan Brown",
      designation: "Educator",
      review:
        "I appreciate the dedication of YourCompany&rsquo;s team. The educational resources provided are invaluable.",
      stars: 4,
      ytkey: "",
    },
  ];

  const [key, setKey] = useState("");
  return (
    <>
      {overlay && <Overlay youtubeKey={key} />}
      <div>
        <section className="testimonials_section section">
          <div className="sub">
            <div className="test_sub">
              <div className="test_first">
                <div className="test_head">
                  <h1>Testimonials</h1>
                  <p className="hero_title ">
                    See what our customers are saying about us. Dive into their
                    stories and find out why they&rsquo;re so happy with our
                    products and services.
                  </p>
                </div>
              </div>

              <div className="test_cards">
                <div className="test_cards_sub">
                  {testimonials.map((item) => {
                    return (
                      <span key={item.name} className="t_card">
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            setKey(item.ytkey);
                            setOverlay(true);
                          }}
                          className="t_vid"
                        >
                          <div className="play_wrapper">
                            <div className="play_btn">
                              <FontAwesomeIcon icon={faPlay} />
                            </div>
                          </div>

                          <Image
                            className="tes_img"
                            src={item.img}
                            alt={item.name}
                            fill
                          />
                        </div>
                        <div className="t_last">
                          {/* <Image src={p1} alt="person" width={48} height={48} /> */}
                          <h5>{item.name}</h5>
                          <p className="t_des gray">{item.designation}</p>
                        </div>
                        <div className="t_content">
                          <p>{item.review}</p>

                          <div className="stars">
                            <FontAwesomeIcon icon={faStar} />{" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                            <FontAwesomeIcon icon={faStar} />
                          </div>
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
              <a href={whatsappUrl} target="_blank" rel="noreferrer noopener">
                {" "}
                <div className="btn card_btn widget ">
                  Register Now For Just ₹ 299.
                  <span>
                    Actual Price <span className="strike">₹ 24,789</span>
                  </span>
                </div>
              </a>
              <div className="footer_last">
                <Timer initialCountdownTime={10 * 60} />
                <span>
                  🔥 54 people Registered in the last 24 hours! Don&rsquo;t miss
                  out.
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
