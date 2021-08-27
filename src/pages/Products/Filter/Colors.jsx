import React from "react";
import s from "./Filter.module.css";

function Colors() {
  const colors = ["#952688", "#FFAF01", "#FFAAD4", "#ED4545", "#37AEE2", '#F84910', '#AC04E7'];
  return (
    <div className={s.colors}>
      {colors.map((color) => {
        return <div className={s.color} style={{background: color}} key={color}></div>;
      })}
    </div>
  );
}

export default Colors;
