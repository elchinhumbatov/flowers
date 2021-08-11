import React from 'react';
import './Group3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Group3() {
  return (
    <div className="group3">
    <h5>Магазины</h5>
    <div className="adressWrap">
      <div className="adressIcon">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div className="info">
        <p>Можайское шоссе, д.41, к.1</p>
        <p>+7(999) 999-03-97</p>
      </div>
    </div>
    <div className="adressWrap">
      <div className="adressIcon">
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div className="info">
        <p>м.Фили. Новозаводская улица, д.2, к.1</p>
        <p>+7(999) 999-03-97</p>
      </div>
    </div>
  </div>
  )
}

export default Group3
