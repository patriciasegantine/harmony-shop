import { theme } from "../../theme.ts";
import styled from "styled-components";

export const HomeCourseTitle = styled.p`
  font-size: ${theme["font-size-m"]};
  text-transform: uppercase;
  padding-top: ${theme["spacing-small"]};
  padding-bottom: ${theme["spacing-small"]};
  display: flex;
  align-items: center;

  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 2px;
    background: ${theme["color-detached"]};
    margin-right: ${theme["spacing-extra-small"]};
  }
`
