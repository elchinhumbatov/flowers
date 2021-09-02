import React from 'react';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

function MiddleNav() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, 'left': open });
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className='middleNavBur'
    >
      <List>
        <li><Link to='/'>Доставка и оплата</Link></li>
        <li><Link to='/'>Как заказать</Link></li>
        <li><Link to='/'>Отзывы</Link></li>
        <li><Link to='/shops'>Магазины</Link></li>
      </List>
      <Divider />
      <List>
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
      </List>
    </div>
  );

  return (
    <div className='middleNavBurWrap'>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </Button>
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default MiddleNav
