import React from "react";
import { styles } from "../../styles/styles";
import { HeroImg, HeroStars } from "../../assets/export";

const Hero = () => {
  return (
    <div
      className={`${styles.paddingHorizontal} w-full relative py-6 lg:pt-12`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0">
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-4 md:gap-y-6 justify-center items-start pt-12 lg:pt-0 lg:pl-8 lg:pr-20">
          <img src={HeroStars} alt="" className="absolute left-0 lg:top-16 -z-10" />
          <h1 className="lg:leading-[24px]">
            <span className="text-5xl lg:text-[70px] font-bold">Welcome to</span>
            <br />
            <span className="text-7xl lg:text-[100px] font-extrabold text-[#F85E00]">
              Rentibles
            </span>
          </h1>
          <h2 className="font-semibold text-[24px] text-[#171717]">
            Your Gateway to Limitless Possibilities!
          </h2>
          <p className="font-medium text-sm text-[#818181]">
            Welcome to Rentibles, where renting meets convenience. Our
            user-friendly mobile application is designed to revolutionize the
            way people rent products. From tools and equipment to electronics
            and furniture, RentalBay connects individuals and businesses,
            offering a seamless platform to browse, book, and rent various
            items.
          </p>
        </div>
        <div className="col-span-2 lg:col-span-1 flex lg:justify-end justify-center">
          <img src={HeroImg} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
