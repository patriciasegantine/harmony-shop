import styled from "styled-components";
import { theme } from "./theme.ts";
import { GlobalStyle } from "./global.styles.ts";
import { Header } from "./components/header/header.tsx";

function App() {
  const MainContainer = styled.main`
    background: ${theme["background-color"]};
    display: flex;
    flex-direction: column;
  `
  
  return (
    <MainContainer>
      <GlobalStyle/>
      <Header/>
    </MainContainer>
  )
}

export default App
