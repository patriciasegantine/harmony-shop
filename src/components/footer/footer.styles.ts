import styled from "styled-components";
import { theme } from "../../theme.ts";

export const FooterContainer = styled.div`
  padding: ${theme["spacing-regular"]};
  border-top: 1px solid ${theme["color-neutral-dark"]};
  width: 100%;
  text-align: end;
  font-size: ${theme["font-size-s"]};
`

export const FooterContent = styled.footer`
  max-width: ${theme['container']};
  margin: 0 auto;
  
`
