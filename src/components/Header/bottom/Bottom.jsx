import React from "react";
import "./Bottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Dropdown from "../dropdown/Dropdown";
import CatBurger from "./CatBurger";

function Bottom() {
  const cats = [ "Букеты", "Цветы", "Подарки", "Кому", "Композиции" ];
  let subcats = [
    {
      title: '',
      uls: [
        {
          lh: 'Тип букета', 
          lis: [ 
            { li: 'Авторские', url: '/' },
            { li: 'Большие', url: '/' },
            { li: 'Букет невесты', url: '/' },
          ]
        }, 
        {
          lh: 'Состав', 
          lis: [ 
            { li: 'Розы', url: '/' },
            { li: 'Пионы', url: '/' },
            { li: 'Тюльпаны', url: '/' },
          ]
        }, 
        {
          lh: 'Повод', 
          lis: [ 
            { li: 'День рождения', url: '/' },
            { li: 'Годовщина', url: '/' },
            { li: 'Выпускной', url: '/' },
          ]
        }, 
        {
          lh: 'Кому', 
          lis: [ 
            { li: 'Маме', url: '/' },
            { li: 'Любимой', url: '/' },
            { li: 'Коллеге', url: '/' },
          ]
        }, 
        {
          lh: 'Предложения', 
          lis: [ 
            { li: 'Акции', url: '/' },
            { li: '25 роз', url: '/' },
            { li: '51 роза', url: '/' },
          ]
        }, 
      ]
    },
    {
      title: 'Все цветы по штучно',
      uls: [
        {
          lh: '', 
          lis: [ 
            { li: 'Розы', url: '/' },
            { li: 'Пионы', url: '/' },
            { li: 'Тюльпаны', url: '/' },
          ]
        }, 
        {
          lh: '', 
          lis: [ 
            { li: 'Герберы', url: '/' },
            { li: 'Сирень', url: '/' },
            { li: 'Лиллии', url: '/' },
          ]
        }, 
      ]
    },
    {
      title: '',
      uls: [
        {
          lh: '', 
          lis: [ 
            { li: 'До 25 роз', url: '/' },
            { li: '51 роза', url: '/' },
            { li: '101 роза', url: '/' },
          ]
        },
        {
          lh: '', 
          lis: [ 
            { li: 'Сиреневые', url: '/' },
            { li: 'Голубые', url: '/' },
            { li: 'Деккоративные', url: '/' },
          ]
        },
      ]
    },
    {
      title: '',
      uls: [
        {
          lh: '', 
          lis: [ 
            { li: 'Белые', url: '/' },
            { li: 'Розовые', url: '/' },
            { li: 'Малиновые', url: '/' },
          ]
        },
      ]
    },
    {
      title: '',
      uls: [
        {
          lh: '', 
          lis: [ 
            { li: 'Букеты цветов', url: '/' },
            { li: 'Цветы в коробке', url: '/' },
            { li: 'Цветы в корзине', url: '/' },
          ]
        },
      ]
    },
  ]

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
