import styled from "styled-components";
import { theme } from "../../theme.ts";
import { Grid } from "@mui/material";

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

export const Column = styled(Grid)`
  display: flex;
  align-items: center;

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }

  @media (max-width: ${theme.laptop}) {
    justify-content: center;

    &:first-child, &:last-child {
      justify-content: center;
    }

  }
`
