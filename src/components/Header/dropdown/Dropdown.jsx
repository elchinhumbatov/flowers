import React from "react";
import { Link } from "react-router-dom";
import s from './Dropdown.module.css'

function Dropdown({ subcat, displayOpt, handleCloseDrawer }) {
  
  return (
    <div>
      {subcat.title ? <Link className={s.titleLink} to='/'>{subcat.title} -{">"}</Link> : null}
      <div className={s.div} style={{display: displayOpt}}>
        {
          subcat.uls.map((ul, idx) => {
            return (
              <ul key={idx} className={s.ul}>
                {ul.lh ? <li className={s.lh}>{ul.lh}</li> : null }
                {
                  ul.lis.map((item, liIdx) => {
                    return <li key={liIdx} className={s.li} onClick={handleCloseDrawer ? handleCloseDrawer : () => {}}>
                      <Link  to={item.url}>{item.li}</Link>
                    </li>
                  })
                }
              </ul>
            );
          })
        }
      </div>
    </div>
  );
}

export default Dropdown;
