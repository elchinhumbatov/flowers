import React, { useState } from "react";
import s from "./Login.module.css";
import LoginForm from './LoginForm';
import RegistrForm from './RegistrForm';

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

export default Login;
