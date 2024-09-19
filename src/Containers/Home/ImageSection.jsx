import Image from "next/image";
import React from "react";

const ImageSection = () => {
  return (
    <div className="flex justify-center mb-[70px] w-full">
      <div className="border-shadowBlue p-5 border border-opacity-15 rounded-[28px] w-full max-w-3xl">
        <Image src="/code-img.png" alt="" width={800} height={530} />
      </div>{" "}
    </div>
  );
};

export default ImageSection;
