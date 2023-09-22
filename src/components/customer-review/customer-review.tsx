import { HomeBlock, HomeDividerHeader, HomeSubtitle, HomeTitle } from "../../pages/home/home.styles.ts";
import React from "react";
import { CarouselProducts } from "../carousel/carousel.tsx";

export const CustomerReview: React.FC<any> = () => {
  return (
    <HomeBlock>
      <HomeDividerHeader>
        <HomeTitle>reviews from our customers</HomeTitle>
        <HomeSubtitle>Explore our shop and take home the beauty of nature</HomeSubtitle>
      </HomeDividerHeader>
      
      <CarouselProducts/>
    </HomeBlock>
  );
};
