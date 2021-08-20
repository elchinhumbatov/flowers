import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RouterConfig from "./navigations/RouterConfig";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RouterConfig />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
