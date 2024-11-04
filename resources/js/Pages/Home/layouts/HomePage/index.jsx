import React from "react";
import MainImage from "../../components/HomePage/MainImage";
import ChannelCard from "../../components/HomePage/ChannelCard";
import { ChannelCardData } from "../../data/ChannelCardData";
import SearchBar from "../../components/HomePage/SearchBar";
import PetCardSlider from "../../components/HomePage/PetCardSlicer";
import BlogCardList from "../../components/HomePage/BlogCardList";

const HomePageLayout = () => {
  return (
    <div className="mt-10 ">
      <MainImage />
      <div className="flex justify-center flex-wrap space-x-6 mt-10 w-full ">
        {ChannelCardData.map((card, index) => (
          <ChannelCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            textColor={card.textColor}
            textSecondaryColor={card.textSecondaryColor}
            onClick={() => console.log(`${card.title} card clicked`)}
          />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <SearchBar />
      </div>
      <div className="flex mx-20 mt-10">
        <PetCardSlider />
      </div>
      <div className="flex ml-16 mt-10">
        <BlogCardList />
      </div>
    </div>
  );
};

export default HomePageLayout;
