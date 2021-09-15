import React from "react";
import "./Favorites.css";
import Product from "../../components/Product/Product";
import Roadmap from "../../components/Roadmap/Roadmap";
import { useSelector } from 'react-redux';


function Favorites() {
  const favorites = useSelector(state => state.favoritePage.favorites);
  console.log(favorites);
  const favoritesRoadmap = {
    last: "Вам понравилось",
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className="graybg">
      <div className="container-outter">
        <Roadmap data={favoritesRoadmap} />
        <div className="title">
          <h3>Вам понравилось</h3>
        </div>
        <div style={{ background: "#fff" }}>
          <div className='products'>
            {favorites.length ? favorites.map((item, idx) => {
              return <Product item={item} key={idx} productWidth={100/6+'%'} />;
            }) : 'no items yet'}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Favorites;
