import React from "react";
import s from "./MyInfo.module.css";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";

const validate = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Required";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }

  // if (!values.email) {
  //   errors.email = "Required";
  // }
  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

function MyInfo() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className={s.wrapper}>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <div className={s.formControl}>
          <label htmlFor="fullName">Ваше Имя/Фамилия</label>
          <input
            placeholder="Имя/Фамилия"
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <small>{formik.errors.fullName}</small>
          ) : null}
        </div>
        <div className={s.formControl}>
          <label htmlFor="phone">Номер телефона</label>
          <input
            placeholder="Номер телефона"
            name="phone"
            type="tel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <small>{formik.errors.phone}</small>
          ) : null}
        </div>
        <div className={s.formControl}>
          <label htmlFor="email">E-mail</label>
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <small>{formik.errors.email}</small>
          ) : null}
        </div>
        <div className={s.formControl}>
          <label htmlFor="password">Текущий пароль</label>
          <input
            placeholder="Текущий пароль"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <small>{formik.errors.password}</small>
          ) : null}
        </div>
        <div className={s.formControl}>
          <label htmlFor="newPassword">Новый пароль</label>
          <input
            placeholder="Новый пароль"
            name="newPassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.newPassword}
          />
          {formik.touched.newPassword && formik.errors.newPassword ? (
            <small>{formik.errors.newPassword}</small>
          ) : null}
        </div>
        <Button 
          variant="contained" 
          color="primary"
          onClick={formik.handleSubmit}
          className={s.btn}
          >
          Сохранить изменения
        </Button>
      </form>
    </div>
  );
}

export default MyInfo;
