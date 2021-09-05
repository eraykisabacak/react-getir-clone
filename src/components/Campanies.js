import { useState, useEffect } from 'react';
import banners from '../api/banners.json';

import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

export default function Campanies() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [campanies, setCampanies] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCampanies(banners);
    }, 1000);
  }, []);
  return (
    <div className='container mx-auto'>
      <span className='font-semibold text-sm mb-3'>Kampanyalar</span>
      <Slider {...settings} className='-mx-2'>
        {campanies.map((item, key) => (
          <div>
            <picture className='block'>
              <img key={key} className='px-2 rounded-lg' src={item.image} />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  );
}
