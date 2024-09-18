import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const navitems = ["Overview", "About", "Contact us", "Solutions"];

const Header = () => {
  return (
    <header className="top-0 sticky flex justify-between items-center bg-background px-20 py-10 w-full h-32 font-montserrat">
      <div>
        <Image src="/muta-logo.png" alt="" width={100} height={45} />
      </div>

      <div className="flex items-center gap-5">
        {navitems.map((item, i) => (
          <Link
            key={i}
            href="#"
            className="border-white pb-2 hover:border-b-2 font-medium text-white leading-4"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex gap-6">
        <Button label="Login" variant="outlined" />
        <Button label="Sign up" variant="contained" />
      </div>
    </header>
  );
};

export default Header;
