import React from 'react';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Accardion from './Accardion';

function CatBurger({cats, subcats}) {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState({ ...state, 'left': open });
  };

  const handleCloseDrawer = () => {
    setState({ ...state, 'left': false });
  }

  const list = () => (
    <div
      role="presentation"
      onKeyDown={toggleDrawer(false)}
      className='middleNavBur'
    >
      <List>
        <Accardion cats={cats} subcats={subcats} handleCloseDrawer={handleCloseDrawer} />
      </List>
    </div>
  );

  return (
    <div className='catBurgerWrap'>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <SwipeableDrawer 
          anchor={'left'} 
          open={state['left']} 
          onClose={handleCloseDrawer}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default CatBurger
