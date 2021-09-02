import React, { useState } from "react";
import s from "./ProductMainInfo.module.css";

function ProductMainInfo() {
  const [activeSize, setActiveSize] = useState("small");
  let oldPrice = true;
  const handleBg = (size) => {
    setActiveSize(size);
  };
  return (
    <div className={s.mainInfoWrap}>
      <div className={s.rate}>
        <span>Оценка:</span>
        <span>rate:</span>
        <span>sale:</span>
      </div>
      <div className={s.price}>
        <p>2200 руб. {oldPrice && <span> 2500 руб.</span>}</p>
      </div>
      <div className={s.card}>
        <span>ОТКРЫТКА К БУКЕТУ - БЕСПЛАТНО!</span>
        <span className={s.violet}>Выбрать открытку</span>
      </div>
      <div className={s.present}>
        <span>Добавим любой подарок по вашему желанию!</span>
        <span className={s.violet}>Добавить</span>
      </div>
      <div className={s.packing}>
        <span className={s.violet}>Изменить упаковку</span>
      </div>
      <div className={s.sizeWrap}>
        <p>Выбери свой размер</p>
        <div className={s.sizes}>
          <div
            className={s.size}
            onClick={() => handleBg("small")}
            style={ activeSize === "small" ? { borderColor: "#962689", boxShadow: '0 0 8px gray' } : null}
          >
            <p>2500 руб.</p>
            <span>Букет маленького размера</span>
          </div>
          <div
            className={s.size}
            onClick={() => handleBg("medium")}
            style={ activeSize === "medium" ? { borderColor: "#962689", boxShadow: '0 0 8px gray' } : null}
          >
            <p>2500 руб.</p>
            <span>Букет маленького размера</span>
          </div>
          <div
            className={s.size}
            onClick={() => handleBg("big")}
            style={ activeSize === "big" ? { borderColor: "#962689", boxShadow: '0 0 8px gray' } : null}
          >
            <p>2500 руб.</p>
            <span>Букет маленького размера</span>
          </div>
        </div>
      </div>
      <div className={s.mainBtns}>
        <button className={s.orderBtn}>Быстрый заказ</button>
        <button className={s.addToBasketBtn}>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default ProductMainInfo;
