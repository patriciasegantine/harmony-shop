import styled from "styled-components";
import { theme } from "./theme.ts";
import { GlobalStyle } from "./global.styles.ts";
import { Header } from "./components/header/header.tsx";
import { Router } from "./router/router.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { muiTheme } from "./muiTheme.ts";
import { ThemeProvider } from "@mui/material";

function App() {
  const MainContainer = styled.main`
    background: ${theme["background-color"]};
    display: flex;
    flex-direction: column;
  `
  
  return (
    <ThemeProvider theme={muiTheme}>
      <MainContainer>
        <GlobalStyle/>
        <Header/>
        <Router/>
        <Footer/>
      </MainContainer>
    </ThemeProvider>
  )
}

export default App
