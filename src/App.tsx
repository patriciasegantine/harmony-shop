import { GlobalStyle } from "./global.styles.ts";
import { Header } from "./components/header/header.tsx";
import { Router } from "./router/router.tsx";
import { Footer } from "./components/footer/footer.tsx";
import { muiTheme } from "./muiTheme.ts";
import { ThemeProvider } from "@mui/material";
import { MainProvider } from "./context/main-context.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store.ts";
import { Provider as ReduxProvider } from "react-redux";

function App() {
  
  return (
    
    <ReduxProvider store={store}>
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <MainProvider>
            <GlobalStyle/>
            <Header/>
            <Router/>
            <Footer/>
          </MainProvider>
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default App
