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

  & div {
    flex: 1;
    width: 100%;
  }

  @media (max-width: ${theme["tablet"]}) {
    flex-direction: column;
  }
`

export const MyInformation = styled.div`
  border-radius: ${theme['border-radius-primary']};
  padding: ${theme['spacing-regular']};

  color: ${theme["color-neutral-light"]};
  transition: 0.4s;

  ul {
    list-style: none;
  }

  span {
    font-weight: 600;
    padding-right: ${theme['spacing-extra-small']};
  }

  a {
    color: ${theme["color-neutral-light"]};
    text-decoration: none;
  }
`
