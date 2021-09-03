import React, {useState} from "react";
import s from "./Products.module.css";
import Roadmap from "../../components/Roadmap/Roadmap";
import Filter from "./Filter/Filter";
import Product from "../../components/Product/Product";
import { useSelector } from "react-redux";
import Sort from "./Sort/Sort";

function Products() {
  const [productWidth, setProductWidth] = useState('170px')
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
          <p>
            Сделайте так, чтобы ваша мама почувствовала себя любимой, удивив ее
            живыми цветами. В конце концов, она заслуживает самого лучшего.
          </p>
        </div>
        <div className={s.sortWrap}>
          <Sort setProductWidth={setProductWidth} />
        </div>
        <div className={s.content}>
          <div className={s.filter}>
            <Filter />
          </div>
          <div className={s.body}>
            <div className={s.products}>
              {products.map((item, idx) => {
                // if (idx === 5) {
                //   return (
                //     <div key={idx} id="productsBanner">
                //       kmlkmmlmllml
                //     </div>
                //   );
                // } else {
                  return <Product item={item} key={idx} productWidth={productWidth} />;
                // }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
