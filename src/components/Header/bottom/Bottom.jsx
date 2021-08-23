import React from "react";
import "./Bottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Dropdown from "../dropdown/Dropdown";
import CatBurger from "./CatBurger";
import { useSelector } from 'react-redux';

function Bottom() {
  const cats = useSelector(state => state.navigations.categories);
  const subcats = useSelector(state => state.navigations.subCategories);

  const handleClick = (id) => {
    let div = document.getElementById(`drop`+id);
    if (div.classList.contains('openDrop')) {
      return div.classList.toggle('openDrop');
    }
    handleClickAway();
    div.classList.add('openDrop');
  };

  const handleClickAway = () => {
    let divs = document.querySelectorAll('.openDrop');
    divs.forEach(div => {
      div.classList.remove('openDrop');
    });
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="bottom-info">
        <CatBurger cats={cats} subcats={subcats} />
        <div className='categories'>
          <ul>
            {cats.map((item, idx) => {
              return (
                <li onClick={() => handleClick(idx)} key={idx}>
                  {item}
                  <FontAwesomeIcon icon={faChevronDown} className='chevron' />
                  <div className="dropContent" id={`drop`+idx}>
                    <Dropdown subcat={subcats[idx]} displayOpt={'flex'} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className='lupa' />
          <input type="text" />
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default Bottom;
