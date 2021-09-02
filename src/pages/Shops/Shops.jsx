import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEnvelope,
  faPhoneAlt,
  faHistory,

  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Roadmap from '../../components/Roadmap/Roadmap';
import s from './Shops.module.css';
import {
  faWhatsapp,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';
import SocialIcons from '../../components/socialIcons/SocialIcons';


function Shops() {
  const shopsRoadMap = {
    last: "Магазины",
    links: [{ url: "/", text: "Flower place" }],
  };
  const [shop, setShop] = useState(0);
  const shops = useSelector(state => state.shopsPage.shops);
  const [activeAdress, setActiveAdress] = useState(0);
  const branches = useSelector(state => state.shopsPage.branches);
  const toggleShops = (branchNo) => {
    setShop(branchNo);
    setActiveAdress(branchNo);
  };

  return (
    <section className='shops-wrap graybg'>
      <div className="container-outter">
        <Roadmap data={shopsRoadMap} />
      </div>

      <div className={`container ` + s.address}>
        {
          shops.map((item, idx) => {
            return <div className={s.adressWrap}>
              <div className={s.adressIcon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className={s.info}>
                <p onClick={() => toggleShops(idx)} className={activeAdress===idx? s.activeAdressClass :null}>{item}</p>
              </div>
            </div>
          })
        }
      </div>


      <div className={`container ` + s.shopInfo}>
      <div className={s.infoWrap}>
            <div className={s.adressWrap}>
              <div className={s.adressIcon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className={s.info}>
                <h5>{branches[shop].adress}</h5>
              </div>
            </div>
            <div className={s.emailWrap}>
              <div className={s.emailIcon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={s.info}>
                <h5><a href="emailto:placeflower@yandex.ru">{branches[shop].mail}</a></h5>
              </div>
            </div>
            <div className={s.phoneWrap}>
              <div className={s.phoneIcon}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className={s.phone}>
                <h5> <a href="callto:+7(999)999-03-97">{branches[shop].phone}</a></h5>
              </div>
              {/* <div className={s.footIcon}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div className={s.footIcon}>
              <FontAwesomeIcon icon={faTelegramPlane} />
            </div> */}

            </div>
            <div className={s.timeWrap}>
              <div className={s.timeIcon}>
                <FontAwesomeIcon icon={faHistory} />
              </div>
              <div className={s.time}>
                <h5>Режим работы</h5>
                <p>
                  Магазин: круглосуточно
                  Доставка: в день заказа
                </p>
              </div>
            </div>
            <div className={s.footerContacts}>
              <SocialIcons />
            </div>
            <div className={s.mapInfo}>
              <a href="#">Показать на карте</a>
            </div>
          </div>
       <div className={s.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.64297996219!2d37.51272531593035!3d55.747331980551905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495f3ba08df7%3A0x78a3dab40eab101a!2zTm92b3phdm9kc2theWEgVWxpdHNhLCAyINC60L7RgNC_0YPRgSAxLCBNb3NrdmEsIFJ1c3NpYSwgMTIxMDg3!5e0!3m2!1sen!2s!4v1629898070861!5m2!1sen!2s" width="600" height="450"></iframe>
        </div>
      </div>

    </section>
  )
}

export default Shops
