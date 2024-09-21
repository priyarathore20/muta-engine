import React from "react";

const DataSection = () => {
  return (
    <section className="flex justify-center mb-[70px]">
      <div className="flex md:flex-row flex-col justify-around items-stretch lg:items-center gap-5 lg:gap-16 w-full max-w-5xl text-white">
        <div className="flex lg:flex-row flex-col items-center gap-6 text-center">
          <h3 className="font-chakra text-3xl leading-[130%]">5000+</h3>
          <p className="font-medium text-blue text-lg uppercase leading-[130%]">
            Active users
          </p>
        </div>
        <span className="bg-white w-[1.5px] lg:h-6"></span>
        <div className="flex lg:flex-row flex-col flex-[0.2] items-center gap-6 text-center">
          <h3 className="font-chakra text-3xl leading-[130%]">300+</h3>
          <p className="font-medium text-blue text-lg uppercase leading-[130%]">
            companies trusting Mutaengine
          </p>
        </div>
        <span className="bg-white w-[1.5px] lg:h-6"></span>
        <div className="flex lg:flex-row flex-col items-center gap-6 text-center">
          <h3 className="font-chakra text-3xl leading-[130%]">$500M+</h3>
          <p className="font-medium text-blue text-lg uppercase leading-[130%]">
            Transactions secured
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
