import React from "react";
import s from "./Delivery.module.css";
import { useSelector } from "react-redux";

function PaymentOptions() {
  const payments = useSelector((state) => state.deliveryPage.paymentMethods);
  return (
    <div className={s.payments}>
      {payments.map((item) => {
        return (
          <div className={s.payment} key={item.id}>
            <img
              src={require(`../../assets/images/icons/${item.img}.png`).default}
              alt="logo"
            />
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PaymentOptions;
