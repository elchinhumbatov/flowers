import React from "react";
import s from "./Product.module.css";
import heart from "../../assets/images/icons/heart.png";
import eye from "../../assets/images/icons/eye.png";
import basket from "../../assets/images/icons/basket.png";

function Product({ item, comment }) {
  const imgsrc = require("../../assets/images/products/" + item.img + ".png");
  return (
    <>
      {comment ? (
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
      ) : (
        <div className={s.product}>
          <div className={s.imgBox}>
            <img src={imgsrc.default} alt="product" />
            <div className={s.hotIcons}>
              <div>
                <img src={heart} alt="fav" />
              </div>
              <div>
                <img src={eye} alt="see" />
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
      )}
    </>
  );
}

export default Product;
