import styled from "styled-components";
import { theme } from "./theme.ts";
import { GlobalStyle } from "./global.styles.ts";

function App() {
  const MainContainer = styled.main`
    background: ${theme["background-color"]};
    display: flex;
    flex-direction: column;
  `
  
  return (
    <MainContainer>
      <GlobalStyle/>
      test
    </MainContainer>
  )
}

export default App
