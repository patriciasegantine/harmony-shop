import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CarouselContainer } from "./carousel-review.styles.ts";
import { ReviewCard } from "../review-card/review-card.tsx";
import { useMainContext } from "../../use-context/main-context.tsx";
import { ICustomerReview } from "../customer-review/customer-review.tsx";

interface ICarouselReview {
  slides: ICustomerReview[]
}

export const CarouselReview: React.FC<ICarouselReview> = ({slides}) => {
  
  const [slidesPerView, setSlidesPerView] = useState<number>(1)
  
  const {windowWidth} = useMainContext()
  
  useEffect(() => {
    if (windowWidth < 768) {
      setSlidesPerView(1)
    } else {
      setSlidesPerView(3)
    }
  }, [windowWidth])
  
  return (
    <CarouselContainer>
      
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        spaceBetween={32}
        loop={true}
      >
        {
          slides?.map(({img, rating, text}: ICustomerReview, index: number) => {
            return (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                draggable
              >
                <ReviewCard
                  img={img}
                  rating={rating}
                  text={text}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </CarouselContainer>
  );
};
