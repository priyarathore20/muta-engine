import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const benefits = [
  {
    img: "/star.png",
    heading: "Polymorphic Code",
    description:
      "MutaEngine constantly mutates your software’s code in real-time, making it nearly impossible for hackers to de-compile or reverse-engineer.",
  },
  {
    img: "/check.png",
    heading: "360° Security",
    description:
      "Our multi-layered defense mechanisms ensure that every part of your software is protected, from code to data to user transactions.",
  },
  {
    img: "/arrow.png",
    heading: "Web3 Integration",
    description:
      "Fully compatible with decentralized applications, MutaEngine provides robust security for your blockchain projects.",
  },
];

const BenefitSection = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-around items-start gap-y-16 my-[70px] text-center lg:text-left">
      <div className="flex flex-col flex-[0.4] gap-8">
        <h2 className="font-chakra font-semibold text-5xl text-white leading-[120%]">
          You Innovate,
          <br />
          We <span className="text-blue">Secure</span>.
        </h2>
        <p className="font-montserrat text-lg text-white/60 leading-[160%]">
          With MutaEngine, you can focus on creating cutting-edge software while
          we ensure it stays protected from threats. Our advanced technology
          keeps your intellectual property safe, allowing you to concentrate on
          what you do best.
        </p>
        <div className="lg:block hidden w-full max-w-44">
          <Button label={"Get Started"} variant={"contained"} />
        </div>
      </div>

      <div className="flex flex-col flex-[0.4] gap-10">
        {benefits.map((item, i) => (
          <div key={i} className="flex items-start gap-5">
            <Image src={item?.img} alt="" width={64} height={50}  className="lg:block hidden"/>

            <div>
              <h2 className="font-bold font-chakra text-white text-xl">
                {item?.heading}
              </h2>
              <p className="text-lg text-white/65 leading-[135%] tracking-wide">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitSection;
