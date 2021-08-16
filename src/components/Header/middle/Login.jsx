import React, {useState} from 'react'
import s from './Login.module.css'

function Login({toggleLogin}) {
  const [form, setForm] = useState('login');

  const handleForm = (data) => {
    setForm(data)
  }
  const handleToggleLogin = (e) => {
    e.target.getAttribute("data-target") === 'out' && toggleLogin();
  }

  return (
    <div data-target='out' className={s.pageWrap} onClick={handleToggleLogin}>
      <div className={s.formWrap}>
        { form === 'login' ? <LoginForm handleForm={handleForm} /> : <RegistrForm handleForm={handleForm} /> }
      </div>
    </div>
  )
}

function LoginForm({handleForm}) {
  return (
    <div>
      <div className={s.title}>
        <p>Вход</p>
        <p onClick={()=>{handleForm('registr')}}>Регистрация</p>
      </div>
      <div className={s.loginForm}>
      login bla bla
      </div>
    </div>
  )
}

function RegistrForm({handleForm}) {
  return (
    <div>
      <div className={s.title}>
        <p>Регистрация</p>
        <p onClick={()=>{handleForm('login')}}>Вход</p>
      </div>
      <p>registr registr </p>
    </div>
  )
}

export default Login
