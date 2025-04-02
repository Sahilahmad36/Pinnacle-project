import React from "react";

const Button = ({ text, icon, isOutline, ...rest }) => {
  const email =
    "flex justify-center items-center gap-2 rounded-md mt-5 w-[472px]  text-black border-black border-2 py-[10px] px-[18px]";
  return (
    <button
      {...rest}
      className={`${
        isOutline
          ? email
          : "flex items-center justify-center gap-2 w-[220px]  bg-black text-white p-3 rounded-md"
      }`}
    >
    
      {icon}
      {text}
    </button>
  );
};

export default Button;