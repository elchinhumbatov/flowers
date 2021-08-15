import React from 'react';
import './Middle.css';
import user from '../../../assets/images/icons/user.png';
import heart from '../../../assets/images/icons/heart.png';
import basket from '../../../assets/images/icons/basket.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import MiddleNav from './MiddleNav';

function Middle() {
  return (
    <div className="middle-info">
      <MiddleNav />
      <Logo />
      <nav>
        <ul>
          <li><Link to='/'>Доставка и оплата</Link></li>
          <li><Link to='/'>Как заказать</Link></li>
          <li><Link to='/'>Отзывы</Link></li>
          <li><Link to='/shops'>Магазины</Link></li>
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
          <img src={user} alt="user" />
          <img src={heart} alt="heart" />
          <img src={basket} alt="basket" />
        </div>
      </div>
    </div>
  )
}

export default Middle
