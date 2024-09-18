import Image from "next/image";
import React from "react";
import Button from "./Button";

const cardContent = [
  {
    img: "/cardImg1.png",
    heading: "What is Polymorphic Code Engine ?",
    subHeading:
      "Polymorphic code engine dynamically mutates the software's source code in real-time, preventing reverse engineering and ensuring enhanced security.",
    ButtonLabel: "Learn More",
  },
  {
    img: "/cardImg2.png",
    heading: "How It Works ?",
    subHeading:
      "By constantly changing the software code during access or execution, the  Polymorphic Code Engine creates a moving target, making it extremely  difficult for hackers to analyze or de-compile.",
    ButtonLabel: "Learn More",
  },
];

const HomeCards = () => {
  return (
    <div className="flex flex-col gap-5 card-parent">
      {cardContent.map((item, i) => (
        <div key={i} className="flex justify-between items-center gap-20">
          <Image src={item?.img} alt="" width={500} height={500} />
          <div className="flex flex-col flex-1 gap-14 w-full max-w-[600px] text-left text-white">
            <h3 className="font-bold font-chakra text-5xl">
              {item?.heading}
            </h3>
            <p className="font-medium font-montserrat text-xl leading-[140%]">
              {item?.subHeading}
            </p>
            <div className="w-full max-w-36">
              <Button label={item?.ButtonLabel} variant={"outlined"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
