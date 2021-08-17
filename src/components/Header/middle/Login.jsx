import React, { useState } from "react";
import { Formik } from "formik";
import s from "./Login.module.css";

function Login({ toggleLogin }) {
  const [form, setForm] = useState("login");

  const handleForm = (data) => {
    setForm(data);
  };
  const handleToggleLogin = (e) => {
    e.target.getAttribute("data-target") === "out" && toggleLogin();
  };

  return (
    <div data-target="out" className={s.pageWrap} onClick={handleToggleLogin}>
      <div className={s.formWrap}>
        {form === "login" ? (
          <LoginForm handleForm={handleForm} />
        ) : (
          <RegistrForm handleForm={handleForm} />
        )}
      </div>
    </div>
  );
}

function LoginForm({ handleForm }) {
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
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

function RegistrForm({ handleForm }) {
  return (
    <div>
      <div className={s.title}>
        <p>Регистрация</p>
        <p
          onClick={() => {
            handleForm("login");
          }}
        >
          Вход
        </p>
      </div>
      <p>registr registr </p>
    </div>
  );
}

export default Login;
