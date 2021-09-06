import React from "react";
import s from "./Instructions.module.css";
import Roadmap from "../../components/Roadmap/Roadmap";
import { useSelector } from "react-redux";
import FAQ from "./FAQ";

function Instructions() {
  const instructions = useSelector(
    (state) => state.instructionsPage.instructions
  );
  const instructionsRoad = {
    last: "Как заказать",
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className="graybg">
      <div className="container-outter">
        <Roadmap data={instructionsRoad} />
        <div className="title">
          <h3>Оформление заказа</h3>
          <p>
            Принимаем заказы круглосуточно и без выходных.Оформить заказ можно
            на сайте или по телефону
          </p>
        </div>
      </div>
      <div className={"whitebg "+s.test}>
        <div className="container">
          <div className={s.instructionsWrap}>
            <div className={s.infos}>
              <h4>Как заказать букет</h4>
              <div className={s.instructions}>
                {instructions.map((item, idx) => {
                  return (
                    <div className={s.instruction} key={idx}>
                      <div className={s.number}>{item.num}</div>
                      <div className={s.info}>{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={s.instructionsImg}>
              <img
                src={require("../../assets/images/instructionsBg.png").default}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.contacts}>
        <div className="container">
          <p>
            Мы всегда готовы помочь вам в выборе букета, оформлении заказа или в
            любых других вопросах. При необходимости свяжитесь с нами по
            телефону
            <a href="tel:+8"> 8 (000) 777-0016 </a> или по электронной почте{" "}
            <a href="mailto:placeflower@yandex.ru">placeflower@yandex.ru.</a>
          </p>
        </div>
      </div>
      <div className="whitebg">
        <div className="container">
          <div className={s.faqsWrap}>
            <h4>Часто задаваемые вопросы</h4>
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructions;
