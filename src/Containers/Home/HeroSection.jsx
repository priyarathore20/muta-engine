import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-center lg:justify-between items-center mt-[70px] mb-[100px]">
      <div className="flex flex-col flex-[0.8] items-center lg:items-start text-center lg:text-left">
        <div className="w-full max-w-96">
          <Button
            label={"Protecting Code, Preserving Innovation "}
            variant={"outlined"}
          />
        </div>
        <div className="mt-11 mb-12">
          <h2 className="font-bold font-chakra text-5xl text-white lg:text-[60px] leading-[120%]">
            Revolutionizing Software Security with{" "}
            <span className="text-blue">Dynamic</span> Mutation
          </h2>
        </div>
        <div>
          <p className="font-medium font-montserrat text-white text-xl leading-[140%]">
            Introducing the polymorphic Code Engine - A New Era in Protecting
            Your software.
          </p>
        </div>
        <div className="flex gap-7 mt-[70px]">
          <Button label={"Learn More"} variant={"contained"} />
          <Button label={"Start Now"} variant={"outlined"} />
        </div>
      </div>
      <div className="lg:block hidden">
        <Image alt="" src="/hero-img.png" width={500} height={500} />
      </div>
    </div>
  );
};

export default HeroSection;
