"use client"
import React, { useEffect } from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  useEffect(() => {
    let prevScrollPos = window.scrollY || window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY || window.pageYOffset;
      const navbar = document.querySelector(".nav_section");

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

  return (
    <>
      <section className="nav_section visible">
        <Image src={logo} alt="logo" width={74} height={48} />
        <ul className="nav_link">
          <Link href="/about">
            <li>Program</li>
          </Link>
          <Link href="/about">
            <li>Resources</li>
          </Link>
          <Link href="/about">
            <li>Project</li>
          </Link>
        </ul>
      </section>
    </>
  );
};

export default Navbar;
