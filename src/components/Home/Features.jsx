import React from "react";
import { styles } from "../../styles/styles";
import { FaturesImg } from "../../assets/export";
import FeatureAccordion from "./FeatureAccordion";

const Features = () => {
  return (
    <div className={`${styles.paddingHorizontal} w-full`} id="features">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-2 lg:col-span-1 order-2 lg:order-1">
          <img
            src={FaturesImg}
            alt=""
            className="lg:w-[719.49px] lg:h-[719.49px]"
          />
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-center order-1 lg:order-2">
          <h1 className="text-[65px] font-extrabold">Features</h1>
          <FeatureAccordion
            title={"Wide Range of Items"}
            num="01/"
            text={
              "From tools and equipment to furniture, electronics, and everyday essentials, Rentibles connects you with a diverse catalog of products — all available at your fingertips."
            }
          />
          <FeatureAccordion
            title={"Secure Transactions"}
            num="02/"
            text={
              "Your safety comes first. Every payment and rental is processed through our secure system, giving both renters and owners peace of mind."
            }
          />
          <FeatureAccordion
            title={"Flexible Rental Periods"}
            num="03/"
            text={
              "Whether you need something for a few hours, days, or weeks, Rentibles offers flexible rental durations to match your needs and budget."
            }
          />
          <FeatureAccordion
            title={"Instant Booking"}
            num="04/"
            text={
              "No waiting, no hassle. Reserve items instantly through our mobile app and get what you need, when you need it."
            }
          />
          <FeatureAccordion
            title={"24/7 Customer Support"}
            num="05/"
            text={
              "Questions or issues? Our support team is available around the clock to ensure a smooth and worry-free rental experience."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
