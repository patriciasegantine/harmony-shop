import { theme } from "../../theme.ts";
import styled from "styled-components";
import { CustomButton, SectionContainer } from "../../global.styles.ts";

export const HomeContainer = styled(SectionContainer)``

export const HomeContent = styled.div`
  gap: ${theme["spacing-regular"]};
`

export const HomeBlock = styled.section`
  margin-top: ${theme["spacing-regular"]};
  margin-bottom: ${theme["spacing-regular"]};
`

export const HomeDividerHeader = styled.h2`
  padding: ${theme["spacing-small"]};
  text-align: center;
  margin-bottom: ${theme["spacing-small"]};
`

export const HomeTitle = styled.h2`
  padding: ${theme["spacing-small"]};
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

export const HomeSubtitle = styled.p`
  font-family: ${theme["font-primary"]};
  font-size: ${theme["font-size-m"]};
  font-weight: 500;
`

export const HomeSectionButton = styled(CustomButton)`
  max-width: 500px;
  margin-top: ${theme["spacing-regular"]} !important;
`
