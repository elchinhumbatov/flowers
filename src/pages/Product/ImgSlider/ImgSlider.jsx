import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Slider from "react-slick";
import s from './ImgSlider.module.css';

export default class ImgSlider extends Component {
  imgs = ["i3", "i4", "i5"];
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className={s.sliderWrap} id='productSlider'>
        <div className={s.mainSlider}>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          nextArrow={<SampleNextArrow />}
          prevArrow={<SamplePrevArrow />}
        >
          {this.imgs.map((img) => {
            return (
              <div key={img}>
                <img
                  src={require(`../../../assets/images/insta/${img}.png`).default}
                  alt="img"
                />
              </div>
            );
          })}
        </Slider>
        </div>
        <div className={s.secondSlider}>
          <Slider
            asNavFor={this.state.nav1}
            ref={(slider) => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            centerMode={true}
          >
            {this.imgs.map((img) => {
              return (
                <div key={img}>
                  <img
                    src={require(`../../../assets/images/insta/${img}.png`).default}
                    alt="img"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={s.btns + ' ' + s.nextBtn}
      style={{ ...style, display: "block", margin: "40px 0 0 0" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={s.btns + ' ' + s.prevBtn}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}
