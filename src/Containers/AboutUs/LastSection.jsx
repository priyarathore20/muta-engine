import Button from "@/components/Button";
import React from "react";

const LastSection = () => {
  return (
    <div className="my-[70px]">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-y-10 bg-gradient-to-br from-gradient1 to-gradient2 px-16 py-[50px] rounded-[30px]">
        <div className="flex flex-col flex-[0.6] gap-7 text-center lg:text-left">
          <h2 className="font-chakra font-semibold text-5xl text-white">
            Get In Touch
          </h2>
          <p className="font-montserrat text-white/65 text-xl leading-[140%]">
            Have questions or want to learn more about how MutaEngine can
            protect your software? We’d love to hear from you. [Provide contact
            information, social media links, and a contact form].
          </p>
        </div>
        <div className="flex-1 w-full max-w-40">
          <Button label={"Contact us"} variant={"contained"} />
        </div>
      </div>
    </div>
  );
};

export default LastSection;
