import React from 'react'
import s from "./RegistrForm.module.css";
import { useFormik } from "formik";

const validate = values => {
  const errors = {};
  if (!values.fullName) { errors.fullName = 'Required'; }
  if (!values.phone) { errors.phone = 'Required'; }
  if (!values.email) { errors.email = 'Required'; }
  if (!values.password) { errors.password = 'Required'; }
  if (!values.code) { errors.code = 'Required'; }
  if (!values.confirm) { errors.confirm = 'Required'; }
  return errors;
};

function RegistrForm({ handleForm }) {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phone: '',
      email: '',
      password: '',
      code: '',
      codeby: '',
      subscribe: '',
      confirm: '',
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <div>
      <div className={s.title}>
        <p>Регистрация</p>
        <p onClick={() => { handleForm("login"); }} >Вход</p>
      </div>
      <div className={s.registrForm}>
        <form onSubmit={formik.handleSubmit}>
          <div className={s.formControl}>
            <label htmlFor="fullName">Имя/Фамилия</label>
            <input
              id="fullName"
              placeholder="Имя/Фамилия"
              name="fullName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            {formik.touched.fullName && formik.errors.fullName ? 
              <small>{formik.errors.fullName}</small> : null}
          </div>

          <div className={s.formControl}>
            <label htmlFor="phone">Номер телефона</label>
            <input
              id="phone"
              placeholder="Номер телефона"
              name="phone"
              type="tel"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? 
              <small>{formik.errors.phone}</small> : null}
          </div>

          <div className={s.formControl}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              placeholder="E-mail"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? 
              <small>{formik.errors.email}</small> : null}
          </div>

          <div className={s.formControl}>
            <label htmlFor="password">Пароль</label>
            <input
              id="password"
              placeholder="Пароль"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? 
              <small>{formik.errors.password}</small> : null}
          </div>
          <div className={s.formControl}>
            <label>Получить код</label>
          </div>
          <div className={s.getCode}>
            <label>
              <input type="radio" name="codeby" value="byphone" onChange={formik.handleChange} />
              Телефон
            </label>
            <label>
              <input type="radio" name="codeby" value="byemail" onChange={formik.handleChange} />
              E-mail
            </label>
            <label style={{color: '#962689'}}>Получить</label>
          </div>

          <div className={s.formControl}>
            <label htmlFor="code">Введите код</label>
            <input
              id="code"
              placeholder="Введите код"
              name="code"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.code}
            />
            {formik.touched.code && formik.errors.code ? 
              <small>{formik.errors.code}</small> : null}
            <br /><small style={{color: '#962689'}}>Не получили код</small> 
          </div>

          <div className={s.checboxes}>
            <input
              id="subscribe"
              name="subscribe"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.subscribe}
            />
            <label htmlFor="subscribe">Хочу получать информацию о скидках и акциях</label>
          </div>
          <div className={s.checboxes}>
            <input
              id="confirm"
              name="confirm"
              type="checkbox"
              onChange={formik.handleChange}
              value={formik.values.confirm}
            />
            <label htmlFor="confirm"
              style={formik.touched.confirm && formik.errors.confirm ? {color: 'red'} : null}>Согласен с обработкой персональных данных</label>
          </div>

          <button type="submit" className={s.formBtn}>Регистрация</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrForm
