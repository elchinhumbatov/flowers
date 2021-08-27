import React from 'react'
import Roadmap from '../../components/Roadmap/Roadmap';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Delivery() {
  const {pathname} = useLocation();
  const lastLink = useSelector(state => state.roadmap[pathname]);
  const delivery = {
    last: lastLink,
    links: [{ url: "/", text: "Flower place" }],
  };
  return (
    <section className='graybg'>
      <div className="container-outter">
        <Roadmap data={delivery} />
        <div className="title">
          <h3>Delivery</h3>
        </div>
      </div>
    </section>
  )
}

export default Delivery
