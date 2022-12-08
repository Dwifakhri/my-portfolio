import React from "react";

const CustomButton = ({ label, id }) => {
  return (
    <button
      id={id}
      className="py-2 px-8 font-white font-normal bg-primary_blue text-center"
    >
      {label}
    </button>
  );
};

export default CustomButton;
