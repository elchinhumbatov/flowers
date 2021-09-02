import React from "react";
import s from "./Filter.module.css";
import { useFormik } from 'formik';

function Composition() {
  const items = ["Пионы", "Розы", "Орхидея"];
  const formik = useFormik({
    initialValues: {
      checked: [],
    },
    onSubmit: values => {
      console.log(values.checked);
    },
  });
  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={formik.handleSubmit}>
        {items.map((item) => {
          return (
            <label className={s.label} key={item} >
              <span>{item}</span>
              <input type="checkbox" name="checked" value={item} onChange={e => {
                formik.handleChange(e);
                formik.handleSubmit();
              }} />
            </label>
          );
        })}
      </form>
    </div>
  );
}

export default Composition;
