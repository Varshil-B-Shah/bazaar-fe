import React from "react";
import { ImGithub } from "react-icons/im";
import { LightLogo, Payments } from "../assets";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-10 sm:py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-8 items-center sm:items-start">
          <img
            className="w-32 mx-auto sm:mx-0"
            src={LightLogo}
            alt="LightLogo"
          />
          <p className="text-white text-sm tracking-wide text-center sm:text-left">
            © VarshilShah.com
          </p>
          <img
            className="w-56 h-50 mx-auto sm:mx-0"
            src={Payments}
            alt="Payments Logos"
          />
          <div className="flex justify-center sm:justify-start gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="mt-8 sm:mt-0">
          <h2 className="text-2xl font-semibold text-white mb-4">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>MBS, Ruwi, Siri Owen</p>
            <p>Mobile: 00968 942456291</p>
            <p>Phone: 00968 940569282</p>
            <p>e-mail: bazaar123@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0">
          <h2 className="text-2xl font-semibold text-white mb-4">profile</h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        <div className="mt-8 sm:mt-0 flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm mb-4 sm:mb-0"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
