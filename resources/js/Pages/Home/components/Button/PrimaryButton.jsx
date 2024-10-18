import React from "react";

const PrimaryButton = ({
  onClick,
  text = "Button",
  bgColor = "bg-[#22AAA1]",
  textColor = "text-white",
  hoverColor = "hover:bg-transparent",
  additionalClasses = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${bgColor} ${textColor} ${hoverColor} ${additionalClasses}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
