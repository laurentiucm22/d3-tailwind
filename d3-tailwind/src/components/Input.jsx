import React from "react";

const Input = ({ placeholder, modifiers }) => {
  const defaultInput =
    "w-30 h-10 p-2 rounded-full font-bold placeholder-orange-primary";

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={`${defaultInput} ${modifiers}`}
      />
    </div>
  );
};

export default Input;
