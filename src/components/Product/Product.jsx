import React, { useState } from "react";
import s from "./Product.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add, remove } from "../../redux/favoriteSlice";
import { toggleIsFavorite } from "../../redux/productsSlice";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

function Product({ item, productWidth }) {
  const [scaleUp, setScaleUp] = useState(false);
  const dispatch = useDispatch();
  const toggleFavorites = () => {
    setScaleUp(true);
    dispatch(toggleIsFavorite(item.id));
    item.isFavorite
      ? dispatch(remove(item.id))
      : dispatch(add({ ...item, isFavorite: true }));
  };
  return (
    <div className={s.product} style={{ width: productWidth }}>
      <div className={s.imgBox}>
        <img
          src={
            require("../../assets/images/products/" + item.img + ".png").default
          }
          alt="product"
        />
        <div className={s.hotIcons}>
          <div
            onClick={toggleFavorites}
            onAnimationEnd={() => setScaleUp(false)}
          >
            {item.isFavorite ? (
              <FavoriteIcon
                color="primary"
                className={scaleUp ? s.scaleUp : ""}
              />
            ) : (
              <FavoriteBorderIcon className={scaleUp ? s.scaleUp : ""} />
            )}
          </div>
          <div>
            <Link to={`/products/${item.id}`}>
              <VisibilityOutlinedIcon />
            </Link>
          </div>
          <div>
            <ShoppingBasketOutlinedIcon />
          </div>
        </div>
      </div>
      <div className={s.productInfo}>
        <p className={s.title}>{item.title}</p>
        <p className={s.price}>{item.price}</p>
        <p className={s.order}>Заказать</p>
      </div>
    </div>
  );
}

export default Product;
