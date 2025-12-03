import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/export";
import { styles } from "../../styles/styles";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className={`pt-12 pb-6 flex flex-col gap-y-6 md:gap-y-8 ${styles.paddingHorizontal}`}
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 lg:px-8 gap-y-6">
        <div className="col-span-12 md:col-span-4 flex justify-start items-center">
          <img src={Logo} alt="" className="" />
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col justify-start items-start lg:items-center gap-y-4">
          <p className="text-xl xl:text-2xl font-semibold leading-[27.72px]">
            Find us on Social Media
          </p>
          <div className="flex items-center justify-center gap-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61584050936731"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/rentibles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.x.com/rentibles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/rentibles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@rentibles1270"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 border-[1px] border-black rounded-full flex justify-center items-center"
            >
              <FaTiktok className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 flex flex-col items-start lg:items-end gap-y-4">
          <p className="text-xl font-semibold leading-[23.1px]">
            We’re always happy to help.
          </p>
          <a
            href="mailto:support@rentibles.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm font-normal leading-[16.17px]`}
          >
            support@rentibles.com
          </a>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between items-center md:py-3 gap-y-3">
        <p className="text-sm font-normal leading-[16.17px] text-center">
          Copyright © 2024 Rentibles. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-x-1">
          <Link
            className="text-sm font-normal leading-[16.17px]"
            to={"/terms"}
          >
            Terms & Conditions
          </Link>
          <span>/</span>
          <Link
            className="text-sm font-normal leading-[16.17px]"
            to={"/privacy"}
          >
            Privacy Policy
          </Link>
          <span>/</span>
          <Link
            className="text-sm font-normal leading-[16.17px]"
            to={"/cookie"}
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;