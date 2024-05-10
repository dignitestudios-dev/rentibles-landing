import React from "react";
import { AboutUsImg } from "../../assets/export";
import { styles } from "../../styles/styles";

const AboutUs = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full`} id="aboutus">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1 order-2 lg:order-1">
          <img
            src={AboutUsImg}
            alt=""
            className="w-full"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-y-4 justify-center lg:pr-8 order-1 lg:order-2">
          <h1 className="text-5xl md:text-[65px] font-extrabold">About us</h1>
          <p className="text-base font-medium text-[#777777]">
            At Rentibles, we're passionate about creating a sharing economy
            where people can access the items they need without the burden of
            ownership. Our journey began with a vision to transform the way we
            interact with possessions, shifting from a culture of accumulation
            to one of shared access and community collaboration. Through
            Rentibles, we strive to make renting not just a transaction, but a
            lifestyle choice that promotes resourcefulness and reduces
            environmental impact.
            <br />
            <br />
            Our mission is to make renting convenient, affordable, and
            sustainable for everyone, empowering individuals and businesses
            alike to maximize the utility of their belongings while minimizing
            waste. Join us in building a future where access trumps ownership,
            and together, let's shape a more sustainable and inclusive world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
