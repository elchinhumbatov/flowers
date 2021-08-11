import React from 'react'
import './Top.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Visa from '../../Visa/Visa';

function Top() {
  return (
    <div className="top-info">
      <div className="top-left">
        <p>Бесплатная доставка для всех заказов от 2000 RUB</p>
      </div>
      <div className="top-right">
        <div className="top-right-info">
          <p>Oтслеживание вашего заказа</p>
        </div>
        <div className="top-devider"></div>
        <div className="top-visa">
          <Visa />
        </div>
        <div className="top-devider"></div>
        <div className="top-social">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}

export default Top
