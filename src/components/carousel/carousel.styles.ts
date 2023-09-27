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
