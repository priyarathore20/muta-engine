import classNames from "classnames";
import React from "react";

const Button = ({ label, variant }) => {
  return (
    <div
      className={classNames(
        "py-4 px-5 text-center font-montserrat leading-4 font-medium cursor-pointer rounded-2xl",
        {
          "bg-blue text-black shadow-custom": variant === "contained",
          "bg-transparent border border-t-[3px] shadow-custom text-white border-blue":
            variant === "outlined",
        }
      )}
    >
      {label}
    </div>
  );
};

export default Button;
