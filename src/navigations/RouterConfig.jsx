import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from '../pages/Main/Main';
import Shops from '../pages/Shops/Shops';
import Favorites from '../pages/Favorites/Favorites';
import Delivery from '../pages/Delivery/Delivery';
import Basket from '../pages/Basket/Basket';
import Products from '../pages/Products/Products';
import ProductPage from "../pages/Product/ProductPage";

function RouterConfig() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/flowers" component={Main} exact />
        <Route path="/shops" component={Shops} />
        <Route path="/delivery" component={Delivery} />
        <Route path="/products" component={Products} exact />
        <Route path="/products/:id" component={ProductPage} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/basket" component={Basket} />
      </Switch>
    </div>
  );
}

export default RouterConfig;
