import { theme } from "../../theme.ts";
import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";

export const HomeContainer = styled(SectionContainer)``

export const HomeContent = styled.div`
  gap: ${theme["spacing-small"]};
`

export const HomeDivider = styled.h2`
  padding: ${theme["spacing-big"]};
  line-height: 1.5;
  font-weight: 500;
  font-family: ${theme["font-primary"]};
  font-size: ${theme["font-size-l"]};
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;


  &::before, &::after {
    content: "";
    display: block;
    width: 80px;
    height: .5px;
    margin: ${theme["spacing-small"]};
    background: ${theme["color-detached"]};
  }
`
