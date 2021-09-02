import React from 'react';
import Roadmap from '../../components/Roadmap/Roadmap';
import './Shops.css';

function Shops() {
  const shops = {
    last: "Магазины",
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className='shops-wrap graybg'>
      <div className="container-outter">
        <Roadmap data={shops} />
      </div>
      <div className="container">
        asd
      </div>
    </section>
  )
}

export default Shops
