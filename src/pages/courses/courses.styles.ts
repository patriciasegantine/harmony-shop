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
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    text-transform: uppercase;

    &::before {
      content: "❤";
      height: .5px;
      margin-right: ${theme["spacing-extra-small"]};
      color: ${theme["color-detached"]};
    }

    &::after {
      content: "";
      display: block;
      height: .5px;
      margin-right: ${theme["spacing-extra-small"]};
      width: 100px;
      background: ${theme["color-detached"]};
      margin-top: ${theme["spacing-extra-small"]};
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
