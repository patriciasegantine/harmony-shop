import { HomeDivider } from "../../pages/home/home.styles.ts";
import React from "react";
import { CarouselProducts } from "../carousel/carousel.tsx";

export const CustomerReview: React.FC<any> = () => {
  return (
    <>
      <HomeDivider>reviews from our customers</HomeDivider>
      <CarouselProducts/>
    </>
  );
};
