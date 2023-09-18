import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const ContactContainer = styled(SectionContainer)`

`
export const ContactContent = styled.div`
  display: flex;
  width: 100%;
  align-items: end;
  gap: ${theme['spacing-regular']};


  @media (max-width: ${theme["tablet"]}) {
    flex-direction: column;
  }
`

export const MyInformation = styled.div`
  border-radius: ${theme['border-radius-primary']};
  color: ${theme["color-detached"]};
  transition: 0.4s;
  
  
  a {
    color: ${theme["color-detached"]};
    text-decoration: none;
  }
`

export const InfoContactBox = styled.div`
  display: flex;
  gap: ${theme["spacing-extra-small"]};
  margin-bottom: ${theme["spacing-small"]};
`

export const InfoTitle = styled.span`
  font-weight: 600;
`

export const InfoContent = styled.span``
