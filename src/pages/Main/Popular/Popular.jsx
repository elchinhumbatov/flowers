import React from "react";
import s from "./Popular.module.css";
import { Link } from "react-router-dom";
import Product from "../../../components/Product/Product";
import Testimonials from "../../../components/Testimonials/Testimonials";
import SlickSlider from "../../../components/SlickSlider/SlickSlider";

function Popular({ title, data, comment }) {
  return (
    <section className={s.popularSection}>
      <div className="container">
        <div className={s.sectionTitle}>
          <h3>{title}</h3>
          <Link to="/">Смотреть все</Link>
        </div>
        <div className={s.popularSlider}>
          <SlickSlider>
            {data.map((item, idx) => {
              if (comment) {
                return <Testimonials item={item} key={idx} />;
              }
              return <Product item={item} key={idx} />;
            })}
          </SlickSlider>
          {/* <SlickSlider>
            {data.map((item, idx) => {
              if (comment) {
                return <Testimonials item={item} key={idx} />;
              }
              return <Product item={item} key={idx} />;
            })}
          </SlickSlider> */}
        </div>
      </div>
    </section>
  );
}

export default Popular;
