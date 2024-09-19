import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const footerLinks = [
  "Overview",
  "About Us",
  "Contact",
  "Features",
  "Privacy Policy",
  "Terms of use",
];

const Footer = () => {
  return (
    <div className="lg:px-20 w-full">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-y-10 border-shadowBlue pb-12 border-b border-opacity-15">
        <Image src="/muta-logo.png" alt="" width={100} height={40} />
        <div className="flex flex-1 gap-4 text-white">
          {footerLinks.map((links, i) => (
            <Link key={i} href="#" className="font-medium font-montserrat">
              {links}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center py-12">
        <p className="font-medium font-montserrat text-white/65">MutaEngine @ 2024. All rights reserved.</p>
        <div className="flex items-center gap-4 text-white cursor-pointer">
          <IoLogoYoutube />
          <RiFacebookFill />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
