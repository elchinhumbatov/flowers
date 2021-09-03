import React from "react";
import s from "./Product.module.css";
import heart from "../../assets/images/icons/heart.png";
import eye from "../../assets/images/icons/eye.png";
import basket from "../../assets/images/icons/basket.png";
import { Link } from "react-router-dom";

function Product({ item, productWidth }) {
  const imgsrc = require("../../assets/images/products/" + item.img + ".png");
  return (
    <div className={s.product} style={{width: productWidth}}>
      <div className={s.imgBox}>
        <img src={imgsrc.default} alt="product" />
        <div className={s.hotIcons}>
          <div>
            <img src={heart} alt="fav" />
          </div>
          <div>
            <Link to={`/products/${item.id}`}>
              <img src={eye} alt="see" />
            </Link>
          </div>
          <div>
            <img src={basket} alt="basket" />
          </div>
        </div>
      </div>
      <div className={s.productInfo}>
        <p className={s.title}>{item.title}</p>
        <p className={s.price}>{item.price}</p>
        <p className={s.order}>Заказать</p>
      </div>
    </div>
  );
}

export default Product;
