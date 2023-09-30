import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const ContactContainer = styled(SectionContainer)``

export const MyInformation = styled.div`
  border-radius: ${theme['border-radius-primary']};
  color: ${theme["color-detached"]};
  transition: 0.4s;
  padding-left: ${theme["spacing-regular"]};

  a {
    color: ${theme["color-detached"]};
    text-decoration: none;
  }

  @media (max-width: ${theme.tablet}px) {
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
