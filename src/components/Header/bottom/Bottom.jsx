import React, { useState } from "react";
import "./Bottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Dropdown from "./dropdown/Dropdown";
import CatBurger from "./CatBurger";
import { useSelector } from "react-redux";

function Bottom() {
  const cats = useSelector((state) => state.navigations.categories);
  const subcats = useSelector((state) => state.navigations.subCategories);
  const [showDrop, setShowDrop] = useState(null);

  const handleClick = (id) => {
    setShowDrop(id);
  };
  const handleClickAway = () => {
    setShowDrop(null);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="bottom-info">
        <CatBurger cats={cats} subcats={subcats} />
        <div className="categories">
          <ul>
            {cats.map((item, idx) => {
              return (
                <li
                  onClick={() => handleClick(idx)}
                  key={idx}
                  style={{ color: showDrop === idx ? "#962689" : "#103742" }}
                >
                  {item}
                  <FontAwesomeIcon icon={faChevronDown} className="chevron" />
                  <div
                    className="dropContent"
                    style={{ display: showDrop === idx ? "block" : "none" }}
                  >
                    <Dropdown
                      subcat={subcats[idx]}
                      displayOpt={"flex"}
                      handleCloseDrawer={(event) => {
                        event.stopPropagation();
                        handleClickAway();
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="lupa" />
          <input type="text" />
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default Bottom;
