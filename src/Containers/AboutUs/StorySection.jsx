import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const StorySection = () => {
  return (
    <div className="flex justify-between items-center my-[70px]">
      <Image alt="" src="/cardImg2.png" width={500} height={500} />

      <div className="flex flex-col flex-[0.8] text-white">
        <h2 className="mb-12 font-bold font-chakra text-6xl">Our Story</h2>

        <div className="flex flex-col gap-5 font-montserrat text-[17px]">
          <p>
            MutaEngine was born out of a simple realization: traditional methods
            of software protection were no longer sufficient in an age where
            hackers are constantly finding new ways to bypass security measures.
            Our founders set out to create a solution that could adapt and
            evolve in real-time, providing a level of protection that static
            methods simply couldn’t match.
          </p>

          <p>
            What started as a small project has grown into a leading solution
            trusted by developers and companies around the world. Today,
            MutaEngine continues to innovate, constantly improving our
            technology to meet the challenges of tomorrow.
          </p>
        </div>

        <div className="mt-16 w-full max-w-48">
          <Button label={"Learn More"} variant={"outlined"} />
        </div>
      </div>
    </div>
  );
};

export default StorySection;
