import React, { useState } from 'react';

import Slider from 'react-slick';
import ReactFlagsSelect from 'react-flags-select';

export default function HeroSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [selected, setSelected] = useState('TR');

  const phones = {
    US: '+1',
    DE: '+50',
    TR: '+90',
    IT: '+7',
    IN: '+15',
  };

  return (
    <div className='relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
      <Slider {...settings}>
        <div>
          <img
            className='w-full h-[500px] object-cover'
            src='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg'
          ></img>
        </div>
        <div>
          <img
            className='w-full h-[500px] object-cover'
            src='https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg'
          ></img>
        </div>
      </Slider>
      <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
        <div>
          <img
            className='w-[180px]'
            src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'
          ></img>
          <h3 className='font-semibold text-white text-4xl mt-10 '>
            Dakikalar içinde
            <br /> kapınızda
          </h3>
        </div>
        <div className='w-[400px] h-[300px] bg-white rounded-lg items-center text-center p-6 space-y-5'>
          <h1 className='text-brand-color text-lg font-semibold mx-auto'>
            Giriş yap veya kayıt ol
          </h1>
          <div className='flex gap-x-2'>
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              selected={selected}
              placeholder='Select Language'
              className='flag-select'
            />
            <label className='flex-1 relative group block cursor-pointer'>
              <input
                required
                className='h-14 border-2 border-gray-200 rounded w-full items-center px-4 text-sm transition-colors hover:border-brand-color focus:outline-none focus:border-brand-color peer'
                type='text'
              />
              <span
                className='absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-brand-color peer-focus:text-xs
              peer-valid:h-5 peer-valid:text-brand-color peer-valid:text-xs'
              >
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className='bg-brand-yellow rounded w-[350px] h-[48px] font-semibold text-brand-color hover:bg-brand-color hover:text-brand-yellow transition-colors'>
            Telefon numarası ile devam et
          </button>
          <span className='flex h-[3px] w-1/2 bg-line-color mx-auto'></span>
          <button className='flex bg-fb-text rounded w-[350px] h-[48px] mt-2 font-semibold text-blue-700 justify-center items-center hover:text-white text-sm'>
            <img
              className='px-4'
              src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDEyQzI0IDUuMzcxODggMTguNjI4MSAwIDEyIDBDNS4zNzE4OCAwIDAgNS4zNzE4OCAwIDEyQzAgMTcuOTkwNiA0LjM4NzUgMjIuOTU0NyAxMC4xMjUgMjMuODU0N1YxNS40Njg4SDcuMDc4MTJWMTJIMTAuMTI1VjkuMzU2MjVDMTAuMTI1IDYuMzQ5MjIgMTEuOTE1NiA0LjY4NzUgMTQuNjU3OCA0LjY4NzVDMTUuOTcwMyA0LjY4NzUgMTcuMzQzOCA0LjkyMTg4IDE3LjM0MzggNC45MjE4OFY3Ljg3NUgxNS44Mjk3QzE0LjMzOTEgNy44NzUgMTMuODc1IDguODAwNzggMTMuODc1IDkuNzVWMTJIMTcuMjAzMUwxNi42NzExIDE1LjQ2ODhIMTMuODc1VjIzLjg1NDdDMTkuNjEyNSAyMi45NTQ3IDI0IDE3Ljk5MDYgMjQgMTJaIiBmaWxsPSIjM0M1QTk5Ii8+Cjwvc3ZnPgo='
            />
            <span className='mx-auto font-semibold'>Facebook ile devam et</span>
          </button>
        </div>
      </div>
    </div>
  );
}
