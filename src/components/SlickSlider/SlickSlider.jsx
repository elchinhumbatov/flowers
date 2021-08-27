import React from "react";
import s from "./SlickSlider.module.css";
import Slider from "react-slick";

function SlickSlider(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div id='mainSlider'>
      <Slider {...settings}>{props.children}</Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={s.btn}
      style={{ ...style, display: "block", margin: "40px 0 0 0" }}
      onClick={onClick}
    >
      <svg
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1432 6.24226L12.6744 0.773507C12.532 0.63108 12.3013 0.63108 12.1589 0.773507C12.0165 0.915934 12.0165 1.14665 12.1589 1.28904L17.0053 6.13545H1.11459C0.913071 6.13545 0.75 6.29852 0.75 6.50004C0.75 6.70156 0.913071 6.86463 1.11459 6.86463H17.0053L12.1589 11.711C12.0165 11.8534 12.0165 12.0841 12.1589 12.2265C12.2301 12.2977 12.3234 12.3334 12.4167 12.3334C12.51 12.3334 12.6032 12.2977 12.6745 12.2265L18.1432 6.75779C18.2856 6.6154 18.2856 6.38468 18.1432 6.24226Z"
          fill="#103742"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={s.btn}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.856813 6.24226L6.32556 0.773507C6.46799 0.63108 6.6987 0.63108 6.84109 0.773507C6.98352 0.915934 6.98352 1.14665 6.84109 1.28904L1.99469 6.13545H17.8854C18.0869 6.13545 18.25 6.29852 18.25 6.50004C18.25 6.70156 18.0869 6.86463 17.8854 6.86463H1.99469L6.84109 11.711C6.98352 11.8534 6.98352 12.0841 6.84109 12.2265C6.7699 12.2977 6.67659 12.3334 6.58331 12.3334C6.49004 12.3334 6.39676 12.2977 6.32553 12.2265L0.856779 6.75779C0.714386 6.6154 0.714386 6.38468 0.856813 6.24226Z"
          fill="#103742"
        />
      </svg>
    </div>
  );
}

export default SlickSlider;
