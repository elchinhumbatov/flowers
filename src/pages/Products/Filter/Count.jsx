import React, { useState } from "react";
import s from './Filter.module.css';

function Count() {
  const [value, setValue] = useState(0);

  const handleChange = e => {
    const newVal = +e.target.value
    if (newVal > 101) {return setValue(101)}
    setValue(newVal);
    console.log(newVal);
  }

  return (
    <div className={s.count}>
      <input type="number" min='0' max='101' value={value} onChange={handleChange} />
    </div>
  );
}

export default Count;
