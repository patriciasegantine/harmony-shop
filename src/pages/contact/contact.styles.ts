import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const ContactContainer = styled(SectionContainer)``

export const ContactTitle = styled.h2`
  margin-top: ${theme["spacing-big"]};
  margin-bottom: ${theme["spacing-regular"]};

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: .5px;
    margin: ${theme["spacing-extra-small"]} 0 ${theme["spacing-regular"]};
    background: ${theme["color-detached"]};
  }
`

export const MyInformation = styled.div`
  border-radius: ${theme['border-radius-primary']};
  color: ${theme["color-detached"]};
  transition: 0.4s;
  padding-left: ${theme["spacing-regular"]};

  a {
    color: ${theme["color-detached"]};
    text-decoration: none;
  }

  @media (max-width: ${theme.tablet}) {
    padding-left: 0;
    padding-top: ${theme["spacing-regular"]};
  }
`

export const InfoContactBox = styled.div`
  margin-bottom: ${theme["spacing-small"]};
`

export const InfoContactBoxFlex = styled.div`
  display: flex;
  gap: ${theme["spacing-extra-small"]};
  margin-bottom: ${theme["spacing-small"]};
`

export const InfoTitle = styled.span`
  font-weight: 600;
`

export const InfoContent = styled.span``
