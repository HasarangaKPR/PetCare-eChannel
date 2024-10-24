import React from "react";
import PrimaryButton from "../Button/PrimaryButton";

const PetCard = ({ price, breed, location, imageUrl, timeAgo }) => {
  const handleContact = () => {
    console.log("Contact...");
  };
  return (
    <div className="card w-64 h-auto rounded-lg shadow-lg overflow-hidden mb-2">
      <img src={imageUrl} alt={breed} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="text-lg font-bold text-[#22AAA1]">{price}</p>
        <p className="text-sm text-[#08101A]">{breed}</p>
        <p className="text-sm text-[#737B83]">{location}</p>
        <p className="text-sm text-[#B4C0CC]">{timeAgo}</p>
        
        <PrimaryButton
          onClick={handleContact}
          text="Contact"
          additionalClasses="rounded-[24px] flex justify-center w-[95%] h-[38px] hover:text-[#08101A] mt-4"
        />
      </div>
    </div>
  );
};

export default PetCard;
