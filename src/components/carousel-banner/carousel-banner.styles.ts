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

export const ImgContainer = styled.div`
  img {
    border-radius: ${theme["border-radius-primary"]};
    overflow: hidden;
    width: 100%;
  }
`
