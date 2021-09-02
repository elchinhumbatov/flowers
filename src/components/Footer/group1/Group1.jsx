import React from "react";
import { Link } from 'react-router-dom';

function Group1() {
  return (
    <div className="group1">
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/">О нас</Link>
        </li>
        <li>
          <Link to="/">Блог</Link>
        </li>
        <li>
          <Link to="/">Контакты</Link>
        </li>
      </ul>
    </div>
  );
}

export default Group1;
