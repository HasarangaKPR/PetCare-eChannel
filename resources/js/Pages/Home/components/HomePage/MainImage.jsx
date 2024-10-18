import React from "react";
import Rectangle from "../../assets/Rectangle.svg";


const MainImage = () => {
  return (
    <div className="mx-10 flex justify-center">
      <img src={Rectangle} className="w-full mx-10" alt="Logo"  />
    </div>
  );
};

export default MainImage;
