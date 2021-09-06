import React from "react";
import s from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Roadmap from "../../components/Roadmap/Roadmap";
import ImgSlider from "./ImgSlider/ImgSlider";
import ProductZoom from "./ProductZoom/ProductZoom";
import ProductMainInfo from "./ProductMainInfo/ProductMainInfo";
import ProductTabs from "./ProductTabs/ProductTabs";
import DeliveryOptions from "../Delivery/DeliveryOptions";
import Recomendations from "./Recomendations/Recomendations";
import SlickSlider from "../../components/SlickSlider/SlickSlider";
import PaymentOptions from '../Delivery/PaymentOptions';

function ProductPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.productsPage.products);
  const recomendations = useSelector((state) => state.productPage.recomendations);

  let product = products.find((item) => item.id === +id);

  const favorites = {
    last: product.title,
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <div className="graybg">
      <div className="container-outter">
        <Roadmap data={favorites} />
        <div className="title">
          <h3>{product.title}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="container-outter">
        <div className={s.productInfo}>
          <div className={s.imgWrap}>
            <ImgSlider />
            <ProductZoom />
          </div>
          <div className={s.mainInfo}>
            <ProductMainInfo />
          </div>
        </div>
      </div>
      <div className='whitebg'>
        <div className="container-outter">
          <div id="productTabs">
            <ProductTabs />
          </div>
        </div>
      </div>
      <div className="container-outter">
        <div className={s.delivery}>
          <h6>Доставка и оплата </h6>
          <div style={{marginBottom: '30px'}}><DeliveryOptions /></div>
          <PaymentOptions />
        </div>
      </div>
      <div className="whitebg">
        <div className="container-outter">
          <div className={s.recomendationsWrap}>
            <h3>Подарки для вас</h3>
            <SlickSlider slides={5}>
              {recomendations.map(item => {
                return <Recomendations item={item} key={item.id} />
              })}
            </SlickSlider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
