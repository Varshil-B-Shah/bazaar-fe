import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (next) => next + 1);
  };
  console.log(currentSlide);
  return (
    <div className="w-full h-auto overflow-x-hidden select-none">
      <div className="w-full h-[22vh] md:h-[27vh] lg:h-[30vh] xl:h-[90vh] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className="w-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen object-cover h-full"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen object-cover h-full"
            src={data[1]}
            alt="ImgTwo"
            loading="priority"
          />
          <img
            className="w-screen object-cover h-full"
            src={data[2]}
            alt="ImgThree"
            loading="priority"
          />
          <img
            className="w-screen object-cover h-full"
            src={data[3]}
            alt="ImgFour"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-[40px] xl:bottom-44 lg:bottom-[50px] justify-center">
          <div
            onClick={prevSlide}
            className="w-7 h-5 xl:w-14 xl:h-12 lg:h-9 lg:w-11 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 rounded-3xl"
          >
            <HiArrowLeft className="text-xs xl:text-xl lg:text-lg"/>
          </div>
          <div
            onClick={nextSlide}
            className="w-7 h-5 xl:w-14 xl:h-12  lg:h-9 lg:w-11 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 rounded-3xl"
          >
            <HiArrowRight className="text-xs xl:text-xl lg:text-lg"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
