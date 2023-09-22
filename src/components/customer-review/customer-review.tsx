import { HomeBlock, HomeDividerHeader, HomeSubtitle, HomeTitle } from "../../pages/home/home.styles.ts";
import React from "react";
import { CarouselProducts } from "../carousel/carousel.tsx";

export const CustomerReview: React.FC<any> = () => {
  return (
    <HomeBlock>
      <HomeDividerHeader>
        <HomeTitle>reviews from our customers</HomeTitle>
        <HomeSubtitle>Discover what our valued customers have to say about their Serenity experience.
          We take pride in delivering organic beauty and holistic well-being that our clients love.
        </HomeSubtitle>
      </HomeDividerHeader>
      
      <CarouselProducts/>
    </HomeBlock>
  );
};
