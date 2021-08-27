import React from "react";
import s from "./ProductPage.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Roadmap from "../../components/Roadmap/Roadmap";
import ImgSlider from "./ImgSlider/ImgSlider";
import ProductZoom from "./ProductZoom/ProductZoom";
import ProductMainInfo from "./ProductMainInfo/ProductMainInfo";
import ProductTabs from "./ProductTabs/ProductTabs";

function ProductPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.productsPage.products);

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
      <div className="container">
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
      <div className={s.aboutProductWrap}>
        <div className="container">
          <div id="productTabs">
            <ProductTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
