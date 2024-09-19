import Image from "next/image";
import React from "react";

const cardContent = [
  {
    img: "/cardImg1.png",
    description:
      "MutaEngine is a team of passionate cybersecurity experts, software engineers, and innovators united by a common vision: to create a world where software developers can innovate without fear of their work being compromised. Our founders, driven by decades of combined experience in cybersecurity, software development, and artificial intelligence, recognized the growing threats in the digital landscape and set out to build a company that could offer robust, future-proof security solutions. We are deeply committed to staying ahead of these threats, constantly evolving our approach to ensure that our clients' software remains secure against the most sophisticated attacks.",
  },
  {
    img: "/cardImg1.png",
    description:
      "At MutaEngine, we believe that every developer, from startups to global enterprises, deserves the freedom to innovate without the risk of piracy or unauthorized modifications. Our team's diverse expertise allows us to develop cutting-edge technologies, like our Polymorphic Code Engine, which continuously adapts to defend against evolving threats. By partnering closely with our clients, we tailor our solutions to meet their unique security needs, providing peace of mind so they can focus on what they do best—creating transformable software.",
  },
];

const InfoCardSection = () => {
  return (
    <div className="flex flex-col items-center gap-20 my-[70px] w-full">
      <h2 className="font-bold font-chakra text-7xl text-white">Who We Are</h2>
      <div className="flex flex-col gap-5 card-parent">
        {cardContent.map((item, i) => (
          <div key={i} className="flex justify-between items-center">
            <Image src={item?.img} alt="" width={540} height={372} />
            <p className="flex-[0.8] font-medium font-montserrat text-lg text-white">
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCardSection;
