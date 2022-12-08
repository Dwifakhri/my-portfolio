import React from "react";

const CustomInput = ({ placeholder, id }) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-3 focus:outline-none bg-primary focus:border-gray-500 focus:border"
    />
  );
};

export default CustomInput;
