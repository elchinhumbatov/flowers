import React from "react";
import s from './Filter.module.css';
import Slider from '@material-ui/core/Slider';

function Price({minVal, maxVal}) {
  const [value, setValue] = React.useState([minVal, maxVal]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMinInputChange = (e) => {
    setValue([e.target.value, value[1]]);
  }
  const handleMaxInputChange = (e) => {
    setValue([value[0], e.target.value]);
  }
  return (
    <div style={{width: '100%'}}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={maxVal}
      />
      <div className={s.inputs}>
        <input type="number" min={minVal} max={maxVal} value={value[0]} onChange={handleMinInputChange} />-
        <input type="number" min={minVal} max={maxVal} value={value[1]} onChange={handleMaxInputChange} />
      </div>
    </div>
  );
}

export default Price;
