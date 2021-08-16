import React from 'react'
import Advantage from './Advantage/Advantage'
import CallBack from './CallBack/CallBack'
import InfoIcons from './InfoIcons/InfoIcons'
import InstaPost from './InstaPost/InstaPost'
import MainCards from './MainCards/MainCards'
import MainSlider from './MainSlider/MainSlider'
import Popular from './Popular/Popular'

let mainCardsAPI = [
  { id: 'card0', title: 'Для любимой мамы ->', price: '5540 руб.', img: 'card0', action: 'Заказать' },
  { id: 'card1', title: 'Удиви свою половинку ->', price: '4540 руб.', img: 'card1', action: 'Заказать' },
  { id: 'card2', title: 'Букет дня', price: '3540 руб.', img: 'card2', action: 'Заказать' },
];
let interestCardsAPI = [
  { id: 'card0', title: 'День рождения!', text: 'Прекрасный повод сделать приятное', price: '2500 руб.', img: 'card3', action: 'Подарить' },
  { id: 'card1', title: 'Комбо набор №1', price: '2500 руб.', img: 'card4', action: 'Заказать' },
  { id: 'card2', title: 'Подарки', price: '2500 руб.', img: 'card5', action: 'Посмотреть' },
];
let popularProductsAPI = [
  {title: 'Комплимент', price: '3540 руб.', img: 'p0'},
  {title: '“Леди и Бродяга”', price: '3540 руб.', img: 'p1'},
  {title: 'Пионовое дерево', price: '3540 руб.', img: 'p2'},
  {title: 'Цветочный сад', price: '3540 руб.', img: 'p3'},
  {title: 'Цветочный сад', price: '3540 руб.', img: 'p4'},
  {title: 'Пионовое дерево', price: '3540 руб.', img: 'p2'},
];
let commentsAPI = [
  {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
  {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
  {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
  {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
  {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
  {text: '“ Большое спасибо, прекрасный букет. Доставили во время. Хорошая обраная связь. Приятные цены. “', author: 'Александр Петрович', img: 'p5'},
]

function Main() {
  return (
    <main>
      <MainSlider />
      <MainCards data={mainCardsAPI} margin={"-50px"} title={false} />
      <InfoIcons />
      <Popular title={"Популярные букеты"} data={popularProductsAPI} />
      <MainCards
        data={interestCardsAPI}
        margin={"0"}
        title={"Вас заинтересует"}
      />
      <Popular title={"Вас заинтересует"} data={popularProductsAPI} />
      <InstaPost />
      <Advantage />
      <section className="graybg">
        <Popular title={"Ваши впечатления"} data={commentsAPI} comment={true} />
      </section>
      <section className="graybg">
        <CallBack />
      </section>
    </main>
  );
}

export default Main;