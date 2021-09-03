import React from "react";
import s from "./Cabinet.module.css";
import Roadmap from "../../components/Roadmap/Roadmap";
import { NavLink, Route, Switch, useLocation } from "react-router-dom";
import MyInfo from "./MyInfo/MyInfo";
import MyOrders from "./MyOrders/MyOrders";
import MyAdresses from "./MyAdresses/MyAdresses";
import PersonIcon from "@material-ui/icons/Person";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Cabinet() {
  let {pathname} = useLocation();
  const path = {
    '/cabinet/my-info' : 'Мои данные',
    '/cabinet/my-orders' : 'Мои заказы',
    '/cabinet/my-adresses' : 'Адресса'
  }
  const cabinet = {
    last: path[pathname],
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className="graybg">
      <div className="container-outter">
        <Roadmap data={cabinet} />
        <div className="title">
          <h3>{path[pathname]}</h3>
        </div>
        <div className={s.body}>
          <ul className={s.ul}>
            <li>
              
              <NavLink
                activeClassName="activeNavName activeGrayBg"
                to={`/cabinet/my-info`}
              >
                <PersonIcon />
                <span>Мои данные</span>
              </NavLink>
            </li>
            <li>
              
              <NavLink
                activeClassName="activeNavName activeGrayBg"
                to={`/cabinet/my-orders`}
              >
                <LocalFloristIcon />
                <span>Мои заказы</span>
              </NavLink>
            </li>
            <li>
              
              <NavLink
                activeClassName="activeNavName activeGrayBg"
                to={`/cabinet/my-adresses`}
              >
                <LocationOnIcon />
                <span>Адресса</span>
              </NavLink>
            </li>
            <li>
              <ExitToAppIcon /> <span>Выход</span>
            </li>
          </ul>
          <div className={s.rightBlock}>
            <Switch>
              <Route path={`/cabinet/my-info`} component={MyInfo} />
              <Route path={`/cabinet/my-orders`} component={MyOrders} />
              <Route path={`/cabinet/my-adresses`} component={MyAdresses} />
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cabinet;
