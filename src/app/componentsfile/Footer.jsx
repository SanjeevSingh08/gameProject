import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram,faTwitter,FaTWitter,faYoutube } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer_section section">
      <div className="footer_container sub">
        <div className="container_sub">
          <footer className="address">
            <Image src={logo} alt="logo" width={74} height={48} />
            <p>440 N Barranca Ave #7488 Covina, CA 91723, USA</p>
            <p>+44 738 085 4297</p>
          </footer>
          <div className="first_container">
          <footer>
            <p className="footer_header">Company</p>
            <ul>
              <li>About Us</li>
              <li>Frontend Team</li>
              <li>Connect</li>
              <li>Contact Us Form</li>
            </ul>
          </footer>
          <footer>
            <p className="footer_header">Features</p>
            <ul>
              <li>Game Shop</li>
              <li>Top Games</li>
              <li>List Of All HTML5 Games</li>
              <li>All Games Link</li>
            </ul>
          </footer>
          <footer>
            <p className="footer_header">Documentation</p>
            <ul>
              <li>Why buy Us?</li>
              <li>Licenses And Prices</li>
              <li>Help/Faq</li>
              <li>DMCA</li>
            </ul>
          </footer>
          <footer>
            <p className="footer_header">Resources</p>
            <ul>
              <li>Terms And Conditions</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </footer>
        </div>
       
      </div>
      <div className="second_container">
          <div className="s_first">
<p>Privacy And Policy</p>
          </div>
          <div className="s_second">
<Link href={"/"}><FontAwesomeIcon icon={faFacebook}/></Link>
<Link href={"/"}><FontAwesomeIcon icon={faInstagram}/></Link>
<Link href={"/"}><FontAwesomeIcon icon={faTwitter}/></Link>
<Link href={"/"}><FontAwesomeIcon icon={faYoutube}/></Link>

          </div>
        </div>
      </div>
      <div className="trademark">
     <p className="">© 2017 - 2023 Forestry Games. All Rights Reserved. Forestry Games logo is registered trademarks of Forestry Games International Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
