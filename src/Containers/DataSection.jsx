import React from "react";

const DataSection = () => {
  return (
    <section className="flex justify-center mb-[70px]">
      <div className="flex flex-1 justify-center items-center gap-16 w-full max-w-5xl text-white">
        <div className="flex items-center gap-6 text-center">
          <h3 className="font-chakra text-4xl leading-[130%]">5000+</h3>
          <p className="font-medium text-blue text-xl uppercase leading-[130%]">
            Active users
          </p>
        </div>
        <span className="bg-white w-[1.5px] h-6"></span>
        <div className="flex items-center gap-6 text-center">
          <h3 className="font-chakra text-4xl leading-[130%]">300+</h3>
          <p className="font-medium text-blue text-xl uppercase leading-[130%]">
            companies trusting Mutaengine
          </p>
        </div>
        <span className="bg-white w-[1.5px] h-6"></span>
        <div className="flex items-center gap-6 text-center">
          <h3 className="font-chakra text-4xl leading-[130%]">$500M+</h3>
          <p className="font-medium text-blue text-xl uppercase leading-[130%]">
            Transactions secured
          </p>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
