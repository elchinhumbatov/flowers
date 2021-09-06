import React from 'react'
import Advantage from './Advantage/Advantage'
import CallBack from './CallBack/CallBack'
import InfoIcons from './InfoIcons/InfoIcons'
import InstaPost from './InstaPost/InstaPost'
import MainCards from './MainCards/MainCards'
import MainSlider from './MainSlider/MainSlider'
import Popular from './Popular/Popular'
import { useSelector } from 'react-redux';

function Main() {
  const mainCardsAPI = useSelector((state) => state.mainPage.mainCards);
  const interestCardsAPI = useSelector((state) => state.mainPage.interestCards);
  const products = useSelector((state) => state.productsPage.products);
  const testimonialsAPI = useSelector((state) => state.mainPage.testimonials);
  return (
    <main>
      <MainSlider />
      <MainCards data={mainCardsAPI} margin={"-50px"} title={false} />
      <InfoIcons />
      <Popular title={"Популярные букеты"} data={products} />
      <MainCards
        data={interestCardsAPI}
        margin={"0"}
        title={"Вас заинтересует"}
      />
      <Popular title={"Вас заинтересует"} data={products} />
      <InstaPost />
      <Advantage />
      <section className="graybg">
        <Popular title={"Ваши впечатления"} data={testimonialsAPI} comment={true} />
      </section>
      <section className="graybg">
        <CallBack />
      </section>
    </main>
  );
}

export default Main;