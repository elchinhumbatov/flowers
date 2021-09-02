import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RouterConfig from "./navigations/RouterConfig";
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#962689'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <RouterConfig />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
