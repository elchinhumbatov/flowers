import React, { useState } from "react";
import "./Middle.css";
import user from "../../../assets/images/icons/user.png";
// import heart from "../../../assets/images/icons/heart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import MiddleNav from "./MiddleNav";
import Login from "../../Login/Login";
import BasketDrawer from "./BasketDrawer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useSelector } from 'react-redux';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import FavoriteIcon from "@material-ui/icons/Favorite";

function Middle() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const favoritesCount = useSelector(state => state.favoritePage.count)

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="middle-info">
      <MiddleNav />
      <Logo />
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="activeNavName" to="/delivery">
              Доставка и оплата
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavName" to="/instructions">
              Как заказать
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavName" to="/feedbacks">
              Отзывы
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeNavName" to="/shops">
              Магазины
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="other">
        <div className="contacts">
          <div className="number">
            <p>8 (000) 777-0016</p>
          </div>
          <div className="social">
            <div className="socIcon">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div className="socIcon">
              <FontAwesomeIcon icon={faTelegramPlane} />
            </div>
          </div>
        </div>
        <div className="top-devider" style={{ height: "40px" }}></div>
        <div className="checkouts">
          {isAuth ? (
            <div className="userIcon" id='toCab'>
              <img src={user} alt="user" onClick={handleClick} />
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to='/cabinet/my-info'>Мои данные</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/cabinet/my-orders'>Мои заказы</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/cabinet/my-adresses'>Адресса</Link></MenuItem>
                <MenuItem onClick={handleClose}>Выход</MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="userIcon">
              <img src={user} alt="user" onClick={toggleLogin} />
              {showLogin && (
                <Login toggleLogin={toggleLogin} setIsAuth={setIsAuth} />
              )}
            </div>
          )}
          <div className="heartIcon">
            <NavLink to="/favorites" activeClassName='activeNavIcon'>
              <FavoriteBorderIcon />
            </NavLink>
            {favoritesCount!==0 && <div className="heartNotif">{favoritesCount}</div>}
          </div>
          <div className="basketIcon">
            <BasketDrawer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Middle;
