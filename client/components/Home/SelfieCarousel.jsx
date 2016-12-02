import React from 'react';
import Slider from 'react-slick';

// import 'slick-carousel/slick/slick-theme.scss';
// import 'slick-carousel/slick/slick.scss';

import img1 from '../../static/selfies/IMG_4885_500x500.jpg';
import img2 from '../../static/selfies/IMG_5391_500x500.jpg';
import img3 from '../../static/selfies/FullSizeRender_500x500.jpg';
import img4 from '../../static/selfies/IMG_0355_500x500.jpg';
import img5 from '../../static/selfies/IMG_4878_500x500.jpg';
import img6 from '../../static/selfies/IMG_5307_500x500.jpg';
import img7 from '../../static/selfies/IMG_5322_500x500.jpg';
import img8 from '../../static/selfies/IMG_4328_500x500.jpg';
import img9 from '../../static/selfies/IMG_1535_500x500.jpg';
import img10 from '../../static/selfies/IMG_0495_500x500.jpg';
import img11 from '../../static/selfies/IMG_0490_500x500.jpg';
import img12 from '../../static/selfies/IMG_0206_500x500.jpg';


const settings = {
  dots: false,
  autoplay: true,
  autoPlaySpeed: 1000,
};

const imgStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
};

export default () => (
  <div style={{height: 250, width: 250}}>
    <Slider {...settings}>
      <div><img style={imgStyle} src={img1}/></div>
      <div><img style={imgStyle} src={img2}/></div>
      <div><img style={imgStyle} src={img3}/></div>
      <div><img style={imgStyle} src={img4}/></div>
      <div><img style={imgStyle} src={img5}/></div>
      <div><img style={imgStyle} src={img6}/></div>
      <div><img style={imgStyle} src={img7}/></div>
      <div><img style={imgStyle} src={img8}/></div>
      <div><img style={imgStyle} src={img9}/></div>
      <div><img style={imgStyle} src={img10}/></div>
      <div><img style={imgStyle} src={img11}/></div>
      <div><img style={imgStyle} src={img12}/></div>
    </Slider>
  </div>
);
