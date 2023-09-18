import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const CoursesContainer = styled(SectionContainer)`

  & div:nth-child(even) {
    flex-direction: row-reverse;
  }
`

export const CoursesContent = styled.div`
  display: flex;
  align-items: stretch;
  column-gap: ${theme["spacing-regular"]};
  margin-top: ${theme["spacing-big"]};

  img {
    height: 100%;
    width: 400px;
  }
`
