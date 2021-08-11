import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from './pages/Main/Main';
import Shops from './pages/Shops/Shops';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/shops" component={Shops} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
