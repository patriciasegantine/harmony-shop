import styled from "styled-components";
import { theme } from "../../theme.ts";

export const CarouselContainer = styled.div`
  margin-bottom: ${theme["spacing-regular"]};
`

export const CardBoxImg = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: ${theme["spacing-regular"]};

  // img {
  width: 100%;
  //   border-radius: 10px;
  //
  //   &:hover {
  //     scale: 1.1;
  //     transition: .5s;
  //     cursor: pointer;
  //   }
  // }
`
