import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from './pages/Main/Main';
import Shops from './pages/Shops/Shops';
import Delivery from './pages/Delivery/Delivery';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/flowers" component={Main} exact />
          <Route path="/shops" component={Shops} />
          <Route path="/delivery" component={Delivery} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
