import styled from "styled-components";
import { SectionContainer } from "../../global.styles.ts";
import { theme } from "../../theme.ts";

export const CoursesContainer = styled(SectionContainer)`
  img {
    width: 100%;
    border-radius: ${theme["border-radius-primary"]};
  }
`

export const CoursesContent = styled.div`
  margin-top: ${theme["spacing-big"]};

  h3 {
    text-transform: uppercase;

    &::after {
      content: "";
      display: block;
      width: 100px;
      height: .5px;
      margin: ${theme["spacing-extra-small"]} 0 ${theme["spacing-regular"]};
      background: ${theme["color-detached"]};
    }
  }

`

export const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  padding-bottom: 10px;
  padding-left: ${theme["spacing-small"]};

  @media (max-width: ${theme.tablet}) {
    margin-top: ${theme["spacing-regular"]};
    padding-left: 0;
  }
`
