import React from "react";

const ChannelCard = ({
  imageSrc,
  title,
  description,
  bgColor ,
  textColor,
  textSecondaryColor,
  onClick,
}) => {
  return (
    <div
      className={`card w-[21.3%] h-auto shadow-2xl ${bgColor} cursor-pointer `}
      onClick={onClick}
    >
      <div className="flex items-center ml-[9%] mt-[2%]">
        <figure className="w-[20%] ">
          <img
            src={imageSrc}
            alt={title}
            className="rounded-full object-cover w-[100%] h-[100%]"
          />
        </figure>
        <div className={`card-body ${textColor} w-full`}>
          <h2 className="card-title text-base">{title}</h2>
          <p className={`text-sm ${textSecondaryColor}`}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
