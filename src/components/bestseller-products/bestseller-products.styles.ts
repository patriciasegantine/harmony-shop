import styled from "styled-components";
import { theme } from "../../theme.ts";

export const ShopBox = styled.div`
  margin: 0 auto;
  text-align: center;
`
export const ProductTitle = styled.h3``

export const ProductDescription = styled.span`

  font-size: ${theme["font-size-s"]};
  color: ${theme["color-neutral-dark"]};
`

export const ProductValue = styled.p`
  font-weight: bold;
  text-align: end;
  font-size: ${theme["font-size-l"]};
`
