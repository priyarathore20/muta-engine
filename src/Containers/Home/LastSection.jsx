import Button from "@/components/Button";
import React from "react";

const LastSection = () => {
  return (
    <div className="lg:mx-16 my-[70px]">
      <div className="flex justify-between items-center bg-gradient-to-br from-gradient1 to-gradient2 px-16 py-[50px] rounded-[30px]">
        <div className="flex flex-col flex-[0.6] gap-7">
          <h2 className="font-chakra font-semibold text-5xl text-white">
            Ready to <span className="text-blue">Secure</span> Your Software?
          </h2>
          <p className="font-montserrat text-white/65 text-xl leading-[140%]">
            Get started with MutaEngine today and protect your software with the
            most advanced security technology available.
          </p>
        </div>
        <div className="flex-1 w-full max-w-40">
          <Button label={"Start Now"} variant={"contained"} />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
