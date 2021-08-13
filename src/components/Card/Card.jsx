import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

function Card({card, id}) {
  const imgsrc = require(`../../assets/images/cards/${card.img}.png`);
  return (
    <div className='card'>
      <div className="cardTitle">
        <h6>{card.title}</h6>
        <span>{card.text}</span>
      </div>
      <div className="cardImg">
        <img src={imgsrc.default} alt="card" />
      </div>
      <div className="info">
        <p className='cardPrice'>{card.price}</p>
        <Link to='/' className='cardBuy'>{card.action}</Link>
      </div>
    </div>
  )
}

export default Card
