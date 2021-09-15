import React from "react";
import s from "./BasketDrawer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Divider from "@material-ui/core/Divider";

function BasketDrawerItem() {
  let [count, setCount] = React.useState(1);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count === 1) return;
    setCount(count - 1);
  };
  return (
    <>
      <li>
        <div className={s.itemWrap}>
          <div className={s.imgBlock}>
            <img
              src={require("../../../../assets/images/basket/b0.png").default}
              alt=""
            />
          </div>
          <div className={s.infoBlock}>
            <div className={s.itemTitle + " " + s.infoItem}>
              <h5>Нежность</h5>
            </div>
            <div className={s.delete + " " + s.infoItem}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M11.541 3.94855H2.45916C2.3609 3.94021 2.26354 3.97267 2.18992 4.03829C2.11754 4.10782 2.08401 4.20848 2.10019 4.30752L3.03349 12.4381C3.14294 13.3345 3.90732 14.0062 4.81035 13.9996H9.3333C10.2618 14.0128 11.0438 13.3089 11.1281 12.3842L11.8999 4.27162C11.9047 4.1846 11.872 4.09968 11.8102 4.03829C11.7366 3.97267 11.6392 3.94021 11.541 3.94855ZM10.4102 12.3483C10.3538 12.8949 9.88235 13.3035 9.33333 13.2816H4.81038C4.27123 13.3035 3.80779 12.9029 3.75142 12.3663L2.85402 4.66649H11.1461L10.4102 12.3483Z"
                    fill="#103742"
                  />
                  <path
                    d="M12.851 1.61554H9.15367V1.04117C9.17359 0.486423 8.74005 0.0205819 8.1853 0.000656586C8.16709 3.85837e-06 8.14885 -0.000167912 8.13064 0.000175629H5.86915C5.31412 -0.0100962 4.85591 0.431491 4.84563 0.986515C4.84529 1.00472 4.84546 1.02296 4.84612 1.04117V1.6155H1.14876C0.950503 1.6155 0.789795 1.77621 0.789795 1.97447C0.789795 2.17273 0.950503 2.33343 1.14876 2.33343H12.851C13.0493 2.33343 13.21 2.17273 13.21 1.97447C13.21 1.77621 13.0492 1.61554 12.851 1.61554ZM8.43574 1.04117V1.6155H5.56401V1.04117C5.54378 0.883865 5.65491 0.739956 5.81222 0.719721C5.83108 0.717282 5.85015 0.716767 5.86911 0.718107H8.1306C8.2888 0.706907 8.42615 0.826047 8.43735 0.984282C8.43873 1.00325 8.43818 1.02231 8.43574 1.04117Z"
                    fill="#103742"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={s.counts + " " + s.infoItem}>
              <button className={s.dec} onClick={handleDec}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <p className={s.count}>{count}</p>
              <button className={s.inc} onClick={handleInc}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className={s.price + " " + s.infoItem}>
              <p>2200 руб.</p>
            </div>
          </div>
        </div>
      </li>
      <Divider />
    </>
  );
}

export default BasketDrawerItem;
