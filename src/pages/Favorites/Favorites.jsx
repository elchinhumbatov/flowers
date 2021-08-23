import React from "react";
import "./Favorites.css";
import Product from "../../components/Product/Product";
import Roadmap from "../../components/Roadmap/Roadmap";

let productsAPI = [
  { title: "Комплимент", price: "3540 руб.", img: "p0" },
  { title: "“Леди и Бродяга”", price: "3540 руб.", img: "p1" },
  { title: "Пионовое дерево", price: "3540 руб.", img: "p2" },
  { title: "Цветочный сад", price: "3540 руб.", img: "p3" },
  { title: "Цветочный сад", price: "3540 руб.", img: "p4" },
  { title: "Пионовое дерево", price: "3540 руб.", img: "p2" },
  { title: "“Леди и Бродяга”", price: "3540 руб.", img: "p1" },
  { title: "Пионовое дерево", price: "3540 руб.", img: "p2" },
  { title: "Цветочный сад", price: "3540 руб.", img: "p3" },
  { title: "Цветочный сад", price: "3540 руб.", img: "p4" },
  { title: "Пионовое дерево", price: "3540 руб.", img: "p2" },
];

function Favorites() {
  const favorites = {
    last: "Вам понравилось",
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className="graybg">
      <div className="container-outter">
        <Roadmap data={favorites} />
        <div className="title">
          <h3>Вам понравилось</h3>
        </div>
        <div style={{ background: "#fff" }}>
          <div className='products'>
            {productsAPI.map((item, idx) => {
              return <Product item={item} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favorites;
