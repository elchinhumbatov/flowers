import React from "react";
import s from './BasketDrawer.module.css';
import basket from "../../../../assets/images/icons/basket.png";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import BasketDrawerItem from "./BasketDrawerItem";
import { Link } from "react-router-dom";

function BasketDrawer() {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (open) => (event) => {
    if ( event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift") ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const list = () => (
    <div
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      className={s.basketDrawerWrap}
    >
      <div className={s.closeDrawer}>
        <FontAwesomeIcon icon={faTimes} onClick={toggleDrawer(false)} />
      </div>
      <h4 className={s.title}>Моя корзина</h4>
      <div className={s.list}>
        <List>
          <BasketDrawerItem />
          <BasketDrawerItem />
          <BasketDrawerItem />
        </List>
      </div>
      <div className={s.total}>
        <p>Всего</p>
        <p>2200 руб</p>
      </div>
      <div className={s.btns}>
        <button className={s.orderNow}>Заказать</button>
        <button className={s.toBasket} onClick={toggleDrawer(false)}>
          <Link to='/basket'>Посмотреть корзину</Link>
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <div className={s.basketIcon}>
          <img src={basket} onClick={toggleDrawer(true)} alt="basket" />
          <div className={s.basketNotif}>7</div>
        </div>
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default BasketDrawer;
