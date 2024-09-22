import Image from "next/image";
import React from "react";

const cards = [
  {
    img: "/chooseCard.png",
    title: "State-of-the-Art Technology",
    description:
      "Our Polymorphic Code Engine is a game-changer in the field of software security, offering unparalleled protection against reverse engineering and unauthorized modifications.",
  },
  {
    img: "/chooseCard.png",
    title: "Expert Team",
    description:
      "Our team of cybersecurity professionals and software engineers brings a wealth of knowledge and experience to the table, ensuring that your software is protected by the best in the business.",
  },
  {
    img: "/chooseCard.png",
    title: "Proven Track Record",
    description:
      " We have a history of successful partnerships with companies of all sizes, from startups to enterprises, helping them secure their software and protect their intellectual property.",
  },
];

const ChooseUsSection = () => {
  return (
    <div className="flex flex-col items-center gap-16 my-[70px]">
      <h2 className="font-bold font-chakra text-6xl text-center text-white">
        Why Choose MutaEngine ?
      </h2>

      <div className="flex lg:flex-row flex-col justify-between items-stretch gap-12">
        {cards.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-9 border-4 border-shadowBlue shadow-custom px-5 py-8 rounded-3xl text-white">
            <Image src={item.img} alt="" width={350} height={200} />
            <div className="flex flex-col items-center gap-6 text-center">
              <h4 className="font-bold font-chakra text-2xl leading-[130%]">{item?.title}</h4>
              <p className="font-montserrat">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUsSection;
