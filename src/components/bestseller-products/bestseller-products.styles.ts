import styled from "styled-components";
import { theme } from "../../theme.ts";

export const ProductTitle = styled.h3``
export const ProductDescription = styled.div`
  font-size: ${theme["font-size-s"]};
  color: ${theme["color-neutral-dark"]};
  margin-bottom: ${theme["spacing-small"]};

  @Media (min-width: ${theme.laptop}) {
    height: 100px;
  }
`
