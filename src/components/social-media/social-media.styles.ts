import styled from "styled-components";
import { theme } from "../../theme.ts";

export const SocialBox = styled.div`

  display: flex;
  column-gap: ${theme["spacing-small"]};

  a:hover {
    opacity: .5;
  }
`
