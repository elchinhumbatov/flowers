import React from "react";
import s from "./Delivery.module.css";
import Roadmap from "../../components/Roadmap/Roadmap";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import DeliveryOptions from "./DeliveryOptions";
import PaymentOptions from './PaymentOptions';

function Delivery() {
  const { pathname } = useLocation();
  const lastLink = useSelector((state) => state.roadmap[pathname]);
  const delivery = {
    last: lastLink,
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className="graybg">
      <div className="container-outter">
        <Roadmap data={delivery} />
        <div className="title">
          <h3>Доставка и оплата </h3>
          <p>Заказы принимаются круглые сутки</p>
        </div>
      </div>
      <section className="whitebg">
        <div className="container">
          <div className={s.optionsWrap}>
            <h5>Варианты доставки</h5>
            <DeliveryOptions />
          </div>
        </div>
      </section>
      <div className="container">
        <div className={s.paymentsWrap}>
          <h5>Возможности оплаты</h5>
          <PaymentOptions />
        </div>
      </div>
    </section>
  );
}

export default Delivery;
