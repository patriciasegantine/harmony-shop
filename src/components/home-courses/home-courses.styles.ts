import { theme } from "../../theme.ts";
import styled from "styled-components";

export const ImgBox = styled.div`

  img {
    border-radius: ${theme["border-radius-primary"]};
    width: 100%;
  }
`

export const HomeCourseTitle = styled.p`
  font-size: ${theme["font-size-m"]};
`
