import React from 'react'
import InfoIcon from '../../../components/InfoIcon/InfoIcon'
import './InfoIcons.css';

function InfoIcons() {
  const infoIconsApi = [
    {img: 'i0', text: 'Бесплатная доставка по Москве при заказе от 2500 руб.'},
    {img: 'i1', text: 'Любого типа записки к вашим букетам'},
    {img: 'i2', text: 'Доставка во времяни без опозданий'},
    {img: 'i3', text: 'Работаем без выходных,  7/24'},
    {img: 'i4', text: 'Фото букета перед отправкой по вашему желанию' },
  ]

  return (
    <section className="graybg infoIconsWrap">
      <div className="container">
        <div className="infoIcons">
          {infoIconsApi.map((item, idx) => {
            return <InfoIcon key={idx} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default InfoIcons;
