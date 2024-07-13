import React from "react";
import Heroimg  from "../../assets/images/HeroImg/heroImage.png"

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[700px] h-[1000px] lgl:w-[900px] lgl:h-[1080px] z-10 "
        src={Heroimg}>
      </img>
      <div className="absolute my-auto w-[750px] h-[700px] lgl:w-[550px] lgl:h-[800px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
