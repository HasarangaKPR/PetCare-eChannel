import React, { useState } from "react";
import PetCard from "./PetCard";
import { PetsCardData } from "../../data/PetCardData";

const PetCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PetsCardData.length);
  };

  const visiblePets = PetsCardData.slice(currentIndex, currentIndex + 5);
  if (visiblePets.length < 5) {
    visiblePets.push(...PetsCardData.slice(0, 5 - visiblePets.length));
  }

  return (
    <div className="relative w-full ">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">PET BUYING & SELLING</h2>
        <button onClick={handleNext} className="text-[#22AAA1] text-sm">
          Show more pets →
        </button>
      </div>
      <div className="flex overflow-x-scroll space-x-6 mt-4">
        {visiblePets.map((pet) => (
          <PetCard
            key={pet.id}
            price={pet.price}
            breed={pet.breed}
            location={pet.location}
            imageUrl={pet.imageUrl}
            timeAgo={pet.timeAgo}
          />
        ))}
      </div>
    </div>
  );
};

export default PetCardSlider;
