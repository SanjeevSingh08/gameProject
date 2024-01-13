import logo from "../../../public/tc_new.png";
import Image from "next/image";
import p3 from "../../../public/p3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCalendar,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import logo1 from "../../../public/logo1.svg";
import feature from "../../../public/feature.jpg";
import p2 from "../../../public/p2.png";
import p5 from "../../../public/p5.jpg";
import c1 from "../../../public/c1.png";
import a1 from "../../../public/a1.png";
import a2 from "../../../public/a2.png";
import a3 from "../../../public/a3.png";
import siddhi from "../../../public/siddhi.jpeg";
import Link from "next/link";
import Timer from "./Timer";

import voda from "../../../public/voda.png";
import toi from "../../../public/toi.png";
import wt from "../../../public/wt.png";
import telnor from "../../../public/telnor.jpeg";
import oglivy from "../../../public/ogilvy.png";
import itc from "../../../public/itc.png";

import grey from "../../../public/grey.png";
import godrej from "../../../public/godrej.png";
import ddb from "../../../public/ddb.jpeg";
import tata from "../../../public/tata.png";

import brain from "../../../public/brain.jpg";

const Navbar = () => {
  const ownerPhoneNumber = "+918100049519"; // Replace with the owner's phone number
  const prefilledMessage = "Hi! I am interested.";

  const whatsappUrl = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <>
      <section className="nav_section ">
        <Image src={logo1} alt="logo" width={74} height={48} />
      </section>

      <section className="hero_section section">
        <div className="sub">
          <div className="hero_heading">
            <h1 className="headone">
              Your performance at the workplace needs to be
              <span className="ptext"> Controlled by You!</span>
            </h1>
            <p className="headtwo hero_title">
              The modern work space is fast changing to an AI driven and
              automated environment. Technology will become increasingly
              skill-dependent. Are you prepared for what it takes to manage the
              new era work environment?
            </p>
          </div>

          <div className="hero_card">
            <div className="hc1 card ">
              <div className="flex">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h3>Here's how you will discover YOUR FORCE!</h3>
                <p className="card_title">
                  Becoming a Corporate Jedi is a path that is reserved for only
                  the best! Do you have it in YOU to come out shining, at the
                  top of the Corporate Ladder? Here&rsquo;s a glimpse of what
                  you will receive...
                </p>
              </div>
              <div>
                <ul>
                  <li>
                    <span>✅</span>
                    <div>Critical thinking skills</div>
                  </li>
                  <li>
                    <span>✅</span>
                    <div>Problem identification & need-gap analysis</div>
                  </li>
                  <li>
                    <span>✅</span>
                    <div>AI-ready management skills</div>
                  </li>
                  <li>
                    <span>✅</span>
                    <div>Exposure to corporate case studies</div>
                  </li>
                  <li>
                    <span>✅</span>
                    <div>
                      How to manage with teammates, superiors & other
                      departments
                    </div>
                  </li>
                  <li>
                    <span>✅</span>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div>Problem-solving with 'Model' based approaches</div>
                  </li>
                  <li>
                    <span>✅</span>
                    <div>Corporate presentation superpowers</div>
                  </li>
                  <li>
                    <span>✅</span>
                    <div>Narrative building techniques</div>
                  </li>
                  <li>
                    <span>✅</span>
                    <div>Marketing secret mantras & much more</div>
                  </li>
                </ul>
              </div>
              <div className="slot ">
                <p className="slot_h">Select your Slot</p>
                <div className="time_slot">
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>1st Jan, 2024 At 11 AM-1 PM</span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
            </div>
            <div className="hc2 card">
              <div className="flex">
                <h3>Be a Jedi At Your WORK</h3>
                <p className="card_title">
                  Watch this short video so you understand why you should join
                  our webinar!
                </p>
              </div>
              <div className="hc2_sub">
                <div className="hero_img widget">
                  <div className="play_wrapper">
                    <div className="play_btn">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                  </div>
                  <Image src={p3} alt="" fill />
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer noopener">
                  {" "}
                  <div className="btn card_btn widget ">
                    Register Now For Just ₹ 299.
                    <span>
                      Actual Price <span className="strike">₹ 24,789</span>
                    </span>
                  </div>
                </a>
                <div className="card_last widget">
                  <span>
                    🔥 54 people Registered in the last 24 hours! Don&rsquo;t
                    miss out.
                  </span>
                  <Timer initialCountdownTime={10 * 60} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="feature_section section">
        <div className="sub">
          <div className="feature_sub">
            <div className="f1">
              <h2>
                What difference can this learning path mean to your career?
              </h2>
              <p className="card_title">
                Learn how well you are poised for career success and what else
                to add to your repertoire to turn you into a FORCE for the
                CORPORATE WORLD!
              </p>
              <ul>
                <li>
                  Fundamentals are critical to success. Have you appraised
                  yourself on these?
                </li>
                <li>
                  Strengths & niches are important to identify early. Do you
                  know yours?
                </li>
                <li>
                  Weaknesses are to be overcome. Have you found your monsters to
                  battle?
                </li>
                <li>
                  Opportunities are double-edged swords. Is your steel sharp
                  enough to cut through?
                </li>
                <li>
                  Threats are waiting at the edges to pull you down. How
                  prepared are you for these?
                </li>
                <li>
                  Tools like AI, systems like Blockchain, transformation like
                  today&rsquo;s Digital Revolution is going to be the norm. Are
                  you ready for constant change?
                </li>
                <li>
                  Human interactions will evolve but never go away. How
                  well-versed are you to manage things that can surprise and
                  blindside you?
                </li>
              </ul>
            </div>
            <div className="f2">
              <div className="feature_img">
                <Image src={feature} alt="feature" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bonus_section section">
        <div className="sub">
          <div className="bonus_sub">
            <h2>Unlock Bonuses Worth ₹ 24,789/-</h2>
            <div className="bonus_cards">
              <div className="b_card">
                <div id="ebook" className="b_img">
                  <Image src={c1} alt="e-book" fill />
                </div>
                <h4>E-book</h4>
                <p className="gray">(Worth ₹ 797)</p>
              </div>
              <div className="b_card">
                <div id="assessment" className="b_img">
                  <Image src={p2} alt="e-book" fill />
                </div>
                <h4>Assessment</h4>
                <p className="gray">(Worth ₹ 8993)</p>
              </div>
              <div className="b_card">
                <div id="cm" className="b_img ">
                  <Image src={p5} alt="e-book" fill />
                </div>
                <h4>Community Membership</h4>
                <p className="gray">(Worth ₹ 14993)</p>
              </div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer noopener">
              {" "}
              <div className="btn bonus_btn">
                Register Now To Claim Your Bonus
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="method_section section">
        <div className="sub">
          <div className="method_sub">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h2>Dive into 'The' AAA method and start your journey</h2>
            <div className="method_cards">
              <div className="m_card">
                <div className="m_img">
                  <Image src={a1} alt="e-book" fill />
                </div>
                <h4>ASSESS</h4>
                <p>
                  Know your personality, strengths, weaknesses, opportunities.
                  and threats. Realise your niche and path forward to CORPORATE
                  GLORY!
                </p>
              </div>
              <div className="m_card">
                <div className="m_img">
                  <Image src={a2} alt="e-book" fill />
                </div>
                <h4>ADDRESS</h4>
                <p>
                  Start your refinement journey. Add hard & soft-skills and be
                  future-ready for any scenario or challenge, and MANAGE with
                  CONFIDENCE!
                </p>
              </div>
              <div className="m_card">
                <div className="m_img">
                  <Image src={a3} alt="e-book" fill />
                </div>
                <h4>ACCESS</h4>
                <p>
                  Get your net practice before the match. Test your skills with
                  community support & coaching that is crafted for YOUR NEEDS!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="intro_section section">
        <div className="sub">
          <div className="intro">
            <h2>Your Truly Impactful Mentor!</h2>
            <div className="intro_sub">
              <div className="i2">
                <div className="intro_img">
                  <Image src={siddhi} alt="feature" fill />
                </div>
                <div className="designation">
                  <h4>Mr. Siddhi Prada Bhattacharya</h4>
                  <p className="gray">(Designation)</p>
                </div>
              </div>
              <div className="i1">
                <h4>
                  Marketer | Adman | Coach | Narrative guru | MICAn (2006 batch)
                </h4>
                <ul>
                  <li>2 Decades in Marketing Communication</li>
                  <li>
                    Career experience across South Asia, Middle - East, Africa
                  </li>
                  <li>
                    Range of experience across FMCG, Retail, Finance,
                    Technology, Telecom, Steel & Corporate brands amongst others
                  </li>
                  <li>Guest faculty for Marketing Management (IIM Kashipur)</li>
                  <li>
                    ICF Certified Business Coach, Trainer & Master Trainer (CCE)
                  </li>
                </ul>
              </div>
            </div>
            <div className="designation_second">
              <h4>Mr. Siddhi Prada Bhattacharya</h4>
             
            </div>
          </div>
        </div>
      </div>

      <section className="brands_section section">
        <div className="sub">
          <div className="brands_sub">
            <Image src={tata} alt="tata" width={150} height={100} />
            <Image src={voda} alt="voda" width={150} height={100} />
            <Image src={itc} alt="itc" width={150} height={100} />
            <Image src={godrej} alt="godrej" width={150} height={100} />
            <Image src={telnor} alt="telnor" width={150} height={100} />
            <Image src={oglivy} alt="oglivy" width={150} height={100} />
            <Image src={grey} alt="grey" width={150} height={100} />
            <Image src={wt} alt="wt" width={150} height={100} />
            <Image src={ddb} alt="ddb" width={150} height={100} />
            <Image src={toi} alt="toi" width={150} height={100} />
          </div>
        </div>
      </section>

      <section className="browse_section section">
        <div className="sub">
          <div className="browse_sub ">
            <h1 className="headone">
              Start your journey to being a more capable professional TODAY!
            </h1>
            <p className="hero_title headtwo">
              Start your corporate improvement journey today with a quick
              assessment that will showcase your current score & standing. Also,
              the free e-guide is there for you to start things off solo if you
              like to try things out by yourself. After all, you can always
              connect to the community when you want.
            </p>

            <div className="browse_cards">
              <div className="b_card">
                <div className="b_img">
                  <Image
                    src={brain}
                    alt="toi"
                    fill
                    style={{ objectFit: "fill" }}
                  />
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer noopener">
                  {" "}
                  <div className="btn b_btn">Take the Assessment</div>
                </a>
              </div>
              <div className="b_card">
                <div className="b_img" id="ebook">
                  <Image src={c1} alt="toi" fill />
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer noopener">
                  {" "}
                  <div className="btn b_btn">Download the Free E-Book</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
