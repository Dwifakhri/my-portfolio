import React from "react";

const CustomInput = ({ placeholder, id, name, type }) => {
  return (
    <input
      required
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full p-3 focus:outline-none bg-primary focus:border-gray-500 focus:border"
    />
  );
};

export default CustomInput;
