import { CarouselReview } from "../carousel-review/carousel-review.tsx";
import { HomeBlock, HomeDividerHeader, HomeSubtitle, HomeTitle } from "../../pages/home/home.styles.ts";
import costumerOne from "../../assets/img/costumer/costumer-one.png";
import costumerTwo from "../../assets/img/costumer/costumer-two.png";
import costumerThree from "../../assets/img/costumer/costumer-three.png";
import costumerFour from "../../assets/img/costumer/costumer-four.png";
import costumerFive from "../../assets/img/costumer/costumer-five.png";

export interface ICustomerReview {
  id: number
  img: string
  text: string
  rating: number
}

export const CustomerReview = () => {
  
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
  return (
    <HomeBlock>
      <HomeDividerHeader>
        <HomeTitle>reviews from our customers</HomeTitle>
        <HomeSubtitle>Discover what our valued customers have to say about their Serenity experience.
          We take pride in delivering organic beauty and holistic well-being that our clients love.
        </HomeSubtitle>
      </HomeDividerHeader>
      
      <CarouselReview slides={customerReview}/>
    </HomeBlock>
  );
};
