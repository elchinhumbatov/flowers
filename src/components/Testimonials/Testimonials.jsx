import React from "react";
import s from './Testimonials.module.css'

function Testimonials({item}) {
  const imgsrc = require("../../assets/images/products/" + item.img + ".png");
  return (
    <div className={s.comment}>
      <div className={s.quote}>
        <img src={imgsrc.default} alt="quote" />
      </div>
      <div className={s.text}>
        <p>{item.text}</p>
      </div>
      <div className={s.author}>
        <p>{item.author}</p>
      </div>
    </div>
  );
}

export default Testimonials;
