import React from "react";
import s from "./Recomendations.module.css";
import Button from "@material-ui/core/Button";

function Recomendations({item}) {
  return (
    <div className={s.product}>
      <div className={s.imgBox}>
        <img
          src={require(`../../../assets/images/recomendations/r0.png`).default}
          alt="product"
        />
      </div>
      <div className={s.productInfo}>
        <div>
          <p className={s.title}>{item.title}</p>
          <p className={s.text}>{item.text}</p>
        </div>
        <div>
          <p className={s.price}>{item.price}</p>
          <Button variant="contained" color="primary">Добавить</Button>
        </div>
      </div>
    </div>
  );
}

export default Recomendations;
