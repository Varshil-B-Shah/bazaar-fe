// import Swiper core and required modules
import {  Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
    "https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];


export const Banner2 = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}

      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop = {true}
      slide
    >
      <SwiperSlide>
      <img
            className="w-screen object-contain"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          />
      </SwiperSlide>
      <SwiperSlide><img
            className="w-screen object-contain h-[200vh]"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          /></SwiperSlide>
      <SwiperSlide><img
            className="w-screen object-contain h-[200vh]"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          /></SwiperSlide>
      <SwiperSlide><img
            className="w-screen object-contain h-[200vh]"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          /></SwiperSlide>
    </Swiper>
  );
};
