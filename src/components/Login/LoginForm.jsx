import { useFormik } from "formik";
import React, { useState } from "react";
import s from "./Login.module.css";

const validate = (values) => {
  const errors = {};
  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length > 15) {
    errors.phone = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  return errors;
};

function LoginForm({ handleForm, toggleLogin, setIsAuth }) {
  const [isLoading, setisLoading] = useState(false);
  const [isTrue, setisTrue] = useState(false);
  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
      rememberMe: false,
    },
    validate,
    onSubmit: (values) => {
      setisLoading(true);
      setisTrue(false);
      setTimeout(() => {
        if (values.phone === "admin" && values.password === "admin") {
          console.log(values);
          formik.resetForm();
          setisLoading(false);
          toggleLogin();
          setIsAuth(true);
        } else {
          setisTrue(true);
          setisLoading(false);
        }
      }, 2000);
    },
  });

  return (
    <div>
      <div className={s.title}>
        <p>Вход</p>
        <p
          onClick={() => {
            handleForm("registr");
          }}
        >
          Регистрация
        </p>
      </div>
      <div className={s.loginForm}>
        <form onSubmit={formik.handleSubmit} disabled={true}>
          <div className={s.formConstrol}>
            <label htmlFor="phone">Телефон</label>
            <input
              placeholder="Телефон"
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

          <div className={s.formConstrol}>
            <label htmlFor="password">Пароль</label>
            <input
              placeholder="Введите пароль"
              name="password"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <small>{formik.errors.password}</small>
            ) : null}
          </div>

          <div className={s.formConstrol}>
            <button type="submit" className={s.formBtn}>
              {isLoading ? "Loading..." : "Войти"}
            </button>
            {isTrue && <small>Номер или пароль неверный.</small>}
          </div>

          <div className={s.bottom}>
            <div className={s.formConstrol}>
              <label htmlFor="rememberMe">Запомнить меня</label>
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.rememberMe}
              />
            </div>
            <p>Забыли пароль?</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
