import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Accardion from './Accardion';

function CatBurger({cats, subcats}) {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const handleCloseDrawer = () => {
    setState({ ...state, 'left': false });
  }

  const list = (anchor) => (
    <div
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
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
        <Button onClick={toggleDrawer('left', true)}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Drawer anchor={'left'} open={state['left']} onClose={handleCloseDrawer}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default CatBurger
