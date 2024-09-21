import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { CgMenuGridO } from "react-icons/cg";

const navitems = ["Overview", "About", "Contact us", "Solutions"];

const Header = () => {
  return (
    <header className="flex justify-between items-center py-10 w-full h-32 font-montserrat header-container">
      <div>
        <Image src="/muta-logo.png" alt="" width={100} height={45} />
      </div>

      <div className="lg:flex items-center gap-5 hidden">
        {navitems.map((item, i) => (
          <Link
            key={i}
            href="#"
            className="hover:border-white mx-2 pb-2 border-transparent border-b-2 font-medium text-white leading-4 tracking-wide transition-all"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <Button label="Login" variant="outlined" />
        <Button label="Sign up" variant="contained" />
        <CgMenuGridO className="block lg:hidden w-8 h-8 text-white" />
      </div>
    </header>
  );
};

export default Header;
