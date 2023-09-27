import styled, { createGlobalStyle } from "styled-components";
import { theme } from './theme.ts'
import LoadingButton from '@mui/lab/LoadingButton';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme["font-primary"]};
    font-size: ${theme["font-size-m"]};
    line-height: ${theme["line-height-l"]};
    background: ${theme["background-color"]};
    color: ${theme['color-neutral-dark']};
    -webkit-font-smoothing: antialiased;

    & .MuiLoadingButton-root {
      background-color: ${theme["color-highlight"]};
    }

    @media (max-width: ${theme.laptop}) {
      font-size: 90%;
    }
  }
`

export const SectionContainer = styled.section`
  scroll-margin-top: 250px;
  max-width: ${theme['container']};
  margin: ${theme["spacing-regular"]} auto;
  position: relative;
  padding-bottom: 64px;
  padding-left: ${theme["spacing-small"]};
  padding-right: ${theme["spacing-small"]};
`

export const SectionTitle = styled.h2`
  margin-top: ${theme["spacing-big"]};
  margin-bottom: ${theme["spacing-regular"]};

  &::after {
    content: "";
    display: block;
    width: 100px;
    height: .5px;
    margin: ${theme["spacing-extra-small"]} 0 ${theme["spacing-regular"]};
    background: ${theme["color-detached"]};
  }
`

export const PrimaryButton = styled.button`
  padding: ${theme["spacing-small"]} ${theme["spacing-regular"]};
  margin-top: ${theme["spacing-small"]};
  border-radius: ${theme["border-radius-primary"]};
  border: none;
  color: ${theme["color-detached"]};
  background: ${theme["color-primary"]};
  text-transform: uppercase;
  font-weight: 600;
  font-family: ${theme["font-secondary"]};
  cursor: pointer;
`

export const CustomButton = styled(LoadingButton)`
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
`

export const ContactTitle = styled.h2`

`
