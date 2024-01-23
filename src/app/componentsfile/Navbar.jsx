"use client"
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY || window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      const navbar = document.querySelector(".nav_section");

      if (currentScrollPos < 10) {
        setIsNavbarTransparent(true);
      } else {
        setIsNavbarTransparent(false);
      }

      if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
        // Scroll up or close to the top
        navbar.classList.add("visible");
        navbar.classList.remove("hidden");
      } else {
        // Scroll down
        navbar.classList.remove("visible");
        navbar.classList.add("hidden");
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isNavbarTransparent ? "transparent" : "";

  return (
    <>
      <section className={`nav_section ${navbarClass} visible`}>
       <Link href="/"> <Image src={logo} alt="logo" width={74} height={48} /></Link>
        <ul className="nav_link">
          <Link href="/about">
            <li>Program</li>
          </Link>
          <Link href="/about">
            <li>Resources</li>
          </Link>
          <Link href="/games">
            <li>Project</li>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
