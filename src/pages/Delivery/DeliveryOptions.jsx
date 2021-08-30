import React from 'react'
import s from "./Delivery.module.css";

function DeliveryOptions() {
  return (
    <div className={s.options}>
      <div className={s.courier}>
        <h6>Курьер до двери</h6>
        <p><span></span>Доставка по Москве осуществляется бесплатно в пределах МКАД.</p>
        <p><span></span>Доставка по Москве осуществляется бесплатно в пределах МКАД.</p>
        <p><span></span>Доставка по Москве осуществляется бесплатно в пределах МКАД.</p>
        <p><span></span>Доставка по Москве осуществляется бесплатно в пределах МКАД.</p>
      </div>
      <div className={s.pickup}>
        <h6>Самовызов</h6>
        <p><span></span>г. Москва, Можайское шоссе, д. 41,к.1.</p>
        <p><span></span>г. Москва, м. Фили, Новозаводская улица, д. 2, к.1.</p>
        <p><span></span>г. Москва, ул. Новый Арбат, 3, стр. 1,</p>
        <p><span></span>Для выдачи заказа Вам нужно приехать в магазин</p>
        <p><span></span>Назвать свою ФИО и номер заказа</p>
      </div>
    </div>
  )
}

export default DeliveryOptions
