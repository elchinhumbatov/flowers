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
import Checkbox from '@material-ui/core/Checkbox';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CallBack() {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                  <form action="">
                    <div className="form-control">
                      <label htmlFor="fullName">Имя/Фамилия</label>
                      <input type="text" name="fullName" placeholder='Имя/Фамилия' />
                    </div>
                    <div className="form-control">
                      <label htmlFor="number">Контактный номер</label>
                      <input type="text" name="number" placeholder='Контактный номер' />
                    </div>
                    <div className="form-control">
                      <label htmlFor="wp"> Связаться по Whatsapp</label>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'name': 'wp' }}
                      />
                    </div>
                  </form>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary" id='alert-dialog-btn'>
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
