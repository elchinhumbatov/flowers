import React from "react";
import s from "./Advantage.module.css";
import img from "../../../assets/images/advantage.png";
import a1 from "../../../assets/images/a1.png";
import a2 from "../../../assets/images/a2.png";
import a3 from "../../../assets/images/a3.png";

function Advantage() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.sectionWrap}>
          <div className={s.info}>
            <div className="title">
              <h3>Наши преимущества</h3>
            </div>
            <div className="advantages">
              <div className={s.advantage}>
                <div className={s.logo}>
                  <img src={a1} alt="" />
                </div>
                <div className={s.aInfo}>
                  <h4>1. Бесплатная доставка</h4>
                  <p>Цена каждого букета, указанная на сайте, уже включает в себя итоговую стоимость наших услуг.</p>
                </div>
              </div>
              <div className={s.advantage}>
                <div className={s.logo}>
                  <img src={a2} alt="" />
                </div>
                <div className={s.aInfo}>
                  <h4>2. Особая гарантия</h4>
                  <p>Если не понравится букет, сообщите нам в течение 24 часов и мы заменим  его бесплатно.</p>
                </div>
              </div>
              <div className={s.advantage}>
                <div className={s.logo}>
                  <img src={a3} alt="" />
                </div>
                <div className={s.aInfo}>
                  <h4>3. Пунктуальная доставка</h4>
                  <p>Сюрпризы, которые приходят во время.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.img}>
            <img src={img} alt="advantage" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantage;
