import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import s from "./CallBack.module.css";
import '../Main.css';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useFormik } from 'formik';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const validate = values => {
  const errors = {};
  if (!values.fullName) {
    errors.fullName = 'Required'
  }
  if (!values.number) {
    errors.number = 'Required'
  }
  return errors;
}

function CallBack() {
  const [open, setOpen] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: '',
      number: '',
      wp: false
    },
    validate,
    onSubmit: values => {
      console.log(values);
      handleClose();
    }
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <section className={s.callBack}>
      <div className="container-outter">
        <div className={s.wrapper}>
          <div className={s.info}></div>
          <div className={s.actionsWrap}>
            <div className={s.actions}>
              <div className={s.contacts}>
                <div className={s.contact}>
                  <FontAwesomeIcon icon={faPhoneAlt} className={s.icon} />
                  <a href="tel:+80007770016">8 (000) 777-0016</a>
                </div>
                <div className={s.contact}>
                  <FontAwesomeIcon icon={faEnvelope} className={s.icon} />
                  <a href="mailto:placeflower@yandex.ru">
                    placeflower@yandex.ru
                  </a>
                </div>
              </div>
              <button onClick={handleClickOpen}>
                Заказать бесплатный звонок
              </button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">
                  {"Заказать обратный звонок"}
                </DialogTitle>
                <DialogContent id="alert-dialog-slide-content">
                  <DialogContentText id="alert-dialog-slide-description">
                    Оставьте номер Вашего телефона <br /> и мы свяжемся с Вами в
                    ближайшее время <br /> (09:00-21:00 по Московскому времени,
                    ежедневно)
                  </DialogContentText>
                  <form onSubmit={formik.handleSubmit} className={s.cbForm}>
                    <div className="form-control">
                      <label htmlFor="fullName">Имя/Фамилия</label>
                      <input 
                        type="text" 
                        name="fullName" 
                        placeholder='Имя/Фамилия'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                      />
                      {formik.touched.fullName && formik.errors.fullName ? 
                        <small className={s.small}>{formik.errors.fullName}</small> : null}
                    </div>
                    <div className="form-control">
                      <label htmlFor="number">Контактный номер</label>
                      <input 
                        type="text" 
                        name="number" 
                        placeholder='Контактный номер'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.number}
                      />
                      {formik.touched.number && formik.errors.number ? 
                        <small className={s.small}>{formik.errors.number}</small> : null}
                    </div>
                    <div className="form-control">
                      <label>
                        Связаться по Whatsapp
                        <input
                          type="checkbox" 
                          name="wp"
                          onChange={formik.handleChange}
                          value={formik.values.wp}
                        />
                      </label>
                    </div>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={formik.handleSubmit} color="primary" id='alert-dialog-btn'>
                    Звонок
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallBack;
