import styled from "styled-components";
import { theme } from "../../theme.ts";

export const FooterContainer = styled.div`
  padding-top: ${theme["spacing-regular"]};
  border-top: 1px solid ${theme["color-neutral-dark"]};
  width: 100%;
  font-size: ${theme["font-size-s"]};
  padding-bottom: ${theme["spacing-regular"]};

`

export const FooterContent = styled.footer`
  max-width: ${theme['container']};
  margin: 0 auto;

  img {
    max-width: 160px;
  }
`
