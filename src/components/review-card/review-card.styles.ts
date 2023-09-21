import styled from "styled-components";
import { theme } from "../../theme.ts";

export const CardsItem = styled.div`
  margin: 16px;
  position: absolute;
  top: 0;
  left: 45%;


  transform: translate(-50%, 20%);
`

export const Text = styled.span`
  display: block;
  margin-top: ${theme["spacing-regular"]};
  text-align: center;
`

export const RatingContainer = styled.div`
  display: grid;
  place-content: center;
  margin-top: ${theme["spacing-small"]};
`
