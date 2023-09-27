import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CarouselContainer } from "./carousel.styles.ts";
import { ReviewCard } from "../review-card/review-card.tsx";
import costumerOne from "../../assets/img/costumer/costumer-one.png";
import costumerTwo from "../../assets/img/costumer/costumer-two.png";
import costumerThree from "../../assets/img/costumer/costumer-three.png";
import costumerFour from "../../assets/img/costumer/costumer-four.png";
import costumerFive from "../../assets/img/costumer/costumer-five.png";
import { useMainContext } from "../../use-context/main-context.tsx";

interface ICustomerReview {
  id: number
  img: string
  text: string
  rating: number
}

const customerReview: ICustomerReview[] = [
  {
    id: 1,
    img: costumerOne,
    text: "These products are amazing! My skin feels refreshed and rejuvenated. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    img: costumerTwo,
    text: "Great quality! My skin has never felt better.",
    rating: 5
  },
  {
    id: 3,
    img: costumerThree,
    text: "Harmony's products smell fantastic and are gentle on sensitive skin. I've recommended them to friends!",
    rating: 5
  },
  {
    id: 4,
    img: costumerFour,
    text: "Life-changing holistic courses with knowledgeable instructors!",
    rating: 5
  },
  {
    id: 5,
    img: costumerFive,
    text: "Loyal customer here! Would love to see more eco-friendly packaging options.",
    rating: 4
  }
]

export const CarouselProducts: React.FC<any> = () => {
  
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
          customerReview?.map((slideContent: ICustomerReview, index: number) => {
            return (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                draggable
              >
                <ReviewCard
                  img={slideContent.img}
                  rating={slideContent.rating}
                  text={slideContent.text}
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </CarouselContainer>
  );
};
