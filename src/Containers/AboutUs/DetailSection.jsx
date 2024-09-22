import Image from "next/image";
import React from "react";

const cardContent = [
  {
    description:
      "We specialize in advanced software protection through our innovative Polymorphic Code Engine. By constantly mutating the code at runtime, MutaEngine makes it extremely difficult for hackers to decompile or reverse-engineer software, providing an impenetrable barrier against unauthorized access and piracy.",
    img: "/workCard1.png",
  },
  {
    description:
      "Our solutions are designed to integrate seamlessly with your existing development workflows, whether you’re building traditional applications or pioneering new blockchain-based projects in the Web3 space. MutaEngine offers a range of tools and services to ensure your software is secure from every angle.",
    img: "/workCard2.png",
  },
];

const DetailSection = () => {
  return (
    <div className="flex flex-col items-center gap-20 my-[70px] w-full">
      <div className="flex flex-col items-center gap-10 text-white">
        <h2 className="font-bold font-chakra text-6xl">What We Do ? </h2>
        <p className="font-medium font-montserrat text-center text-xl">
          We provide advanced software protection with our Polymorphic Code
          Engine, ensuring your applications stay secure from piracy, reverse
          engineering, and unauthorized modifications.
        </p>
      </div>

      <div className="flex flex-col lg:flex-col justify-between gap-12">
        {cardContent.map((item, i) => (
          <div key={i} className="border-4 border-shadowBlue bg-transparent shadow-md shadow-shadowBlue rounded-3xl w-[500px] h-[650px]">
            <div class="bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] flex flex-col gap-16 bg-[size:24px_24px] px-11 py-16 h-full">
              <p className="font-montserrat text-center text-lg text-white">{item?.description}</p>
              <Image src={item?.img} alt="" width={414} height={290} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailSection;

