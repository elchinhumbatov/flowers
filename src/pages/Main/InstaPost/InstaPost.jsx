import React from 'react'
import s from './InstaPost.module.css'

let instaPostAPI = [
  {img: 'i0', price: '2054 руб.'},
  {img: 'i1', price: '2054 руб.'},
  {img: 'i2', price: '2054 руб.'},
  {img: 'i3', price: '2054 руб.'},
  {img: 'i4', price: '2054 руб.'},
  {img: 'i5', price: '2054 руб.'},
]

function InstaPost() {
  return (
    <section className='graybg' style={{padding: '35px 10px'}}>
      <div className="container">
        <div className={s.posts}>
          <div className={s.post}>
            <div className={s.postWrap}>
              <div className={s.instaPost}>
                <div data-mc-src="3e03c643-2c10-4fe6-9b83-381c2303eab4#instagram"></div>
              </div>
            </div>
          </div>
          {
            instaPostAPI.map((item, idx) => {
              let imgsrc = require('../../../assets/images/insta/'+item.img+'.png');
              return <div className={s.post} key={idx}>
                <div className={s.img}>
                  <img src={imgsrc.default} alt="" />
                </div>
                <div className={s.info}>
                  <span>{item.price}</span>
                  <span>Заказать</span>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default InstaPost
