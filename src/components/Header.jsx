import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { CgMenuGridO } from "react-icons/cg";

const navitems = [
  { label: "Overview", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Contact us", href: "/" },
  { label: "Solutions", href: "/" },
];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-10 w-full h-32 font-montserrat header-container">
      <Link href={"/"}>
        <Image src="/muta-logo.png" alt="" width={100} height={45} />
      </Link>

      <div className="lg:flex items-center gap-5 hidden">
        {navitems.map((item, i) => (
          <Link
            key={i}
            href={item?.href}
            className="hover:border-white mx-2 pb-2 border-transparent border-b-2 font-medium text-white leading-4 tracking-wide transition-all"
          >
            {item?.label}
          </Link>
        ))}
      </div>

      <div className="md:flex items-center gap-6 hidden">
        <Button label="Login" variant="outlined" />
        <Button label="Sign up" variant="contained" />
      </div>
      <CgMenuGridO className="block lg:hidden w-8 h-8 text-white" />
    </header>
  );
};

export default Header;
