import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
const Main = lazy(() => import("../pages/Main/Main"));
const Shops = lazy(() => import("../pages/Shops/Shops"));
const Favorites = lazy(() => import("../pages/Favorites/Favorites"));
const Delivery = lazy(() => import("../pages/Delivery/Delivery"));
const Basket = lazy(() => import("../pages/Basket/Basket"));
const Products = lazy(() => import("../pages/Products/Products"));
const ProductPage = lazy(() => import("../pages/Product/ProductPage"));
const Instructions = lazy(() => import("../pages/Instructions/Instructions"));
const Cabinet = lazy(() => import("../pages/Cabinet/Cabinet"));
// import Main from "../pages/Main/Main";
// import Shops from "../pages/Shops/Shops";
// import Favorites from "../pages/Favorites/Favorites";
// import Delivery from "../pages/Delivery/Delivery";
// import Basket from "../pages/Basket/Basket";
// import Products from "../pages/Products/Products";
// import ProductPage from "../pages/Product/ProductPage";
// import Instructions from "../pages/Instructions/Instructions";
// import Cabinet from "../pages/Cabinet/Cabinet";

function RouterConfig() {
  return (
    <div>
      <ScrollToTop />
      <Suspense fallback={<div>loading..</div>}>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/flowers" component={Main} exact />
          <Route path="/shops" component={Shops} />
          <Route path="/delivery" component={Delivery} />
          <Route path="/instructions" component={Instructions} />
          <Route path="/products" component={Products} exact />
          <Route path="/products/:id" component={ProductPage} />
          <Route path="/cabinet" component={Cabinet} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default RouterConfig;
