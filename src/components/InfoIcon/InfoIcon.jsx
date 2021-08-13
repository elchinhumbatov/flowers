import React from 'react'

function InfoIcon({item}) {
  let imgsrc = require(`../../assets/images/icons/${item.img}.png`);
  return (
    <div className="infoIcon">
      <div className="icon">
        <img src={imgsrc.default} alt="icon" />
      </div>
      <div className="info">{item.text}</div>
    </div>
  )
}

export default InfoIcon
