import styled from "styled-components";
import { theme } from "../../theme.ts";

export const HomeProductBox = styled.div`
  border-radius: ${theme["border-radius-primary"]};

  img {
    width: 100%;
    overflow: hidden;
    border-radius: ${theme["border-radius-primary"]};
  }
`
