import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <section className="nav_section ">
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
  );
};

export default Navbar;
