import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CarouselContainer, ImgContainer } from "./carousel-banner.styles.ts";
import bgBannerOne from "../../assets/img/shop-banner-1.png";
import bgBannerTwo from "../../assets/img/shop-banner-2.png";
import bgBannerThree from "../../assets/img/shop-banner-3.png";

const shopBanner = [
  {
    id: 1,
    banner: bgBannerOne
  },
  {
    id: 2,
    banner: bgBannerTwo
  },
  {
    id: 3,
    banner: bgBannerThree
  }
]

export const CarouselBanner: React.FC<any> = () => {
  
  return (
    <CarouselContainer>
      
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        spaceBetween={32}
        loop={true}
      >
        {
          shopBanner?.map((item: any, index: number) => {
            return (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                draggable
              >
                <ImgContainer>
                  <img src={item.banner} alt=""/>
                </ImgContainer>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </CarouselContainer>
  );
};
