import React from "react";
import { Link } from "react-router-dom";

function Group2() {
  return (
    <div className="group2">
      <ul>
        <li>
          <Link to='/'>Возврат средств и оплата</Link>
        </li>
        <li>
          <Link to='/'>Доставка и оплата</Link>
        </li>
        <li>
          <Link to='/'>Изменение заказа</Link>
        </li>
        <li>
          <Link to='/'>Скидки</Link>
        </li>
        <li>
          <Link to='/'>Каталог</Link>
        </li>
      </ul>
    </div>
  );
}

export default Group2;
