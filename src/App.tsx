import { GlobalStyle } from "./global.styles.ts";
import { Header } from "./components/header/header.tsx";
import { Router } from "./router/router.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { muiTheme } from "./muiTheme.ts";
import { ThemeProvider } from "@mui/material";
import { MainProvider } from "./use-context/main-context.tsx";

function App() {
  
  return (
    <ThemeProvider theme={muiTheme}>
      <MainProvider>
        <GlobalStyle/>
        <Header/>
        <Router/>
        <Footer/>
      </MainProvider>
    </ThemeProvider>
  )
}

export default App
