import { Rating } from "@mui/lab";
import React from "react";
import { CardsItem, RatingContainer, Text } from "./review-card.styles.ts";
import { Avatar, Card } from "@mui/material";

interface ICustomerReview {
  img: string
  text: string
  rating: number
}

export const ReviewCard: React.FC<ICustomerReview> = ({img, text, rating}) => {
  return (
    < >
      <div style={{marginTop: '100px'}}>
        <Card sx={{padding: '36px', height: '250px'}}>
          <CardsItem>
            <Avatar
              alt="Remy Sharp"
              src={img}
              sx={{width: 100, height: 100}}
            />
          </CardsItem>
          
          <Text>{text}</Text>
          
          <RatingContainer>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
          </RatingContainer>
        </Card>
      
      </div>
    
    
    </>
  );
};
