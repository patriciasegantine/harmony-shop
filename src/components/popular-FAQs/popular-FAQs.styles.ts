import { theme } from "../../theme.ts";
import styled from "styled-components";

export const AccordionStyle = {
  background: 'transparent',
  padding: theme["spacing-small"],
  marginTop: theme["spacing-small"],
  marginBottom: theme["spacing-small"],
}

export const Questions = styled.span`
  font-weight: 500;
  color: ${theme["color-detached"]};
  font-size: ${theme["font-size-m"]};
`
