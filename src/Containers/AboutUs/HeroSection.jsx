import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[100%] lg:bg-[url('/heroImg2.png')] bg-no-repeat bg-none">
      <div className="lg:relative flex justify-start items-center lg:items-start pt-[60px] pb-[90px] section-container">
        <div className="flex flex-col items-center lg:items-start gap-10 text-center text-white lg:text-left">
          <h2 className="font-bold font-chakra text-7xl">Our Mission</h2>
          <p className="w-full max-w-[90%] lg:max-w-[580px] font-montserrat text-lg text-white">
            At MutaEngine, our mission is to revolutionize software security by
            providing cutting-edge solutions that protect your software from
            piracy, reverse engineering, and unauthorized modifications. We
            believe in empowering developers and companies to focus on
            innovation while we ensure their intellectual property remains
            secure.
          </p>
          <div className="w-full max-w-56">
            <Button label={"Learn More"} variant={"outlined"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
