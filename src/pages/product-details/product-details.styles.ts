import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const ProductDetailsContainer = styled(SectionContainer)``

export const ImageBox = styled.span`

  img {
    width: 100%;
    border-radius: ${theme["border-radius-primary"]};
  }
`
