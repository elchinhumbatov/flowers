import React from "react";
import "./Bottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useState } from "react";
import Dropdown from "../dropdown/Dropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: 30,
    left: 0,
    zIndex: 5,
    padding: theme.spacing(1),
    background: "#FFFFFF",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
}));

function Bottom() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const cat = [ "Букеты", "Цветы", "Розы", "Пионы", "Сладости", "Композиции", "Кому", ];
  const [id, setId] = useState('');

  const handleClick = (item) => {
    setId(item);
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="bottom-info">
        <div className={classes.root + ' categories'}>
          <ul>
            {cat.map((item, idx) => {
              return (
                <li onClick={() => handleClick(item)} key={idx}>
                  {item}
                  <FontAwesomeIcon icon={faChevronDown} />
                </li>
              );
            })}
          </ul>
          {open ? <div className={classes.dropdown}><Dropdown id = {id} /></div> : null}
        </div>
        <div className="search"></div>
      </div>
    </ClickAwayListener>
  );
}

export default Bottom;
