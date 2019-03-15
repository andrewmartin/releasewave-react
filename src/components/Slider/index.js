import React from 'react';
import Slider from 'react-slick';

import './Slider.scss';

export default class TestimonialCarousel extends React.Component {
  render() {
    const { items } = this.props;
    if (!items) return null;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      easing: 'easeOutExpo',
      arrows: false,
      customPaging: i => <span>{i + 1}</span>,
    };
    return (
      <Slider {...settings}>
        {items.map(i => {
          return <div key={i} dangerouslySetInnerHTML={{ __html: i.content }} />;
        })}
      </Slider>
    );
  }
}
