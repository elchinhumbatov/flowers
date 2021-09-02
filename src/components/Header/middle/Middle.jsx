import React, {useState} from 'react';
import './Middle.css';
import user from '../../../assets/images/icons/user.png';
import heart from '../../../assets/images/icons/heart.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import MiddleNav from './MiddleNav';
import Login from '../../Login/Login';
import BasketDrawer from './BasketDrawer';

function Middle() {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }

  return (
    <div className="middle-info">
      <MiddleNav />
      <Logo />
      <nav>
        <ul>
          <li><NavLink activeClassName='activeNavName' to='/delivery'>Доставка и оплата</NavLink></li>
          <li><NavLink activeClassName='activeNavName' to='/instruction'>Как заказать</NavLink></li>
          <li><NavLink activeClassName='activeNavName' to='/feedbacks'>Отзывы</NavLink></li>
          <li><NavLink activeClassName='activeNavName' to='/shops'>Магазины</NavLink></li>
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
        <div className="top-devider" style={{'height': '40px'}}></div>
        <div className="checkouts">
          <div className="userIcon">
            <img src={user} alt="user" onClick={toggleLogin} />
            {showLogin && <Login toggleLogin={toggleLogin} />}
          </div>
          <div className="heartIcon">
            <NavLink to='/favorites'><img src={heart} alt="heart" /></NavLink>
            <div className="heartNotif">99</div>
          </div>
          <div className="basketIcon">
            <BasketDrawer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middle
