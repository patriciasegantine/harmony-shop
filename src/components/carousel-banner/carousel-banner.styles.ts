import styled from "styled-components";
import { theme } from "../../theme.ts";

export const CarouselContainer = styled.div`
  margin-bottom: ${theme["spacing-regular"]};

  .swiper-button-next,
  .swiper-button-prev {
    color: ${theme["color-highlight"]};
  }

  .swiper-pagination-bullet {
    background-color: ${theme["color-highlight"]};
  }

`

export const ImgContainer = styled.div<{ url: string, mobile: string }>`
  border-radius: ${theme["border-radius-primary"]};
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;

  img {
    overflow: hidden;
    width: 100%;
  }

  @media (max-width: ${theme.tablet}) {
    background-image: url(${props => props.mobile});
    height: 280px;
  }
`
