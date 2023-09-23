import { SectionContainer } from "../../global.styles.ts";
import styled from "styled-components";
import { Box } from "@mui/material";
import { theme } from "../../theme.ts";

export const CourseEnrollFormContainer = styled(SectionContainer)``

export const BoxForm = styled(Box)`

  @media (min-width: ${theme.laptop}) {
    max-width: 70%;
  }
`
