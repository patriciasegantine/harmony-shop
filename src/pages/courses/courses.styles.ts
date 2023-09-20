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
  margin-top: ${theme["spacing-extra-big"]};
  
  h3{
    text-transform: uppercase;
    
    &::after {
      content: "";
      display: block;
      width: 100px;
      height: .5px;
      margin: ${theme["spacing-small"]} 0;
      background: ${theme["color-detached"]};
      
    }
  }

  img {
    height: 100%;
    width: 400px;
  }
`
