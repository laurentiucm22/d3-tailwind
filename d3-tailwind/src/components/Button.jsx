import React from "react";

const Button = ({ children, type, modifiers }) => {
  const defaultButton = "px-2 py-2 rounded-full font-bold";
  const types = {
    primary: "bg-orange-primary text-white",
    secondary: "bg-white text-orange-primary",
    default: "bg-white text-black",
  };
  return (
    <div>
      <button className={`${defaultButton} ${types[type]} ${modifiers}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
