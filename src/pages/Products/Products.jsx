import React from "react";
import s from "./Products.module.css";
import Roadmap from "../../components/Roadmap/Roadmap";
import Filter from "./Filter/Filter";
import Product from '../../components/Product/Product';
import { useSelector } from 'react-redux';

function Products() {
  const products = useSelector((state) => state.productsPage.products);
  const favorites = {
    last: "Кому",
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className="graybg">
      <div className="container-outter">
        <Roadmap data={favorites} />
        <div className="title">
          <h3>Для любимой мамы</h3>
          <p>Сделайте так, чтобы ваша мама почувствовала себя любимой, удивив ее живыми цветами. В конце концов, она заслуживает самого лучшего.</p>
        </div>
        <div className={s.sortWrap}>sort</div>
        <div className={s.content}>
          <div className={s.filter}>
            <Filter />
          </div>
          <div className={s.body}>
            <div className="products">
              {products.map((item, idx) => {
                return <Product item={item} key={idx} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
