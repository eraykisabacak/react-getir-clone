import { useState, useEffect } from 'react';
import cardsJSON from '../api/cards.json';

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCards(cardsJSON);
    }, 1000);
  }, []);

  return (
    <div className='container mx-auto flex flex-row items-center text-center justify-between mt-10 gap-x-4'>
      {cards.map((item, key) => (
        <div
          className='flex flex-col p-10 bg-white rounded-lg w-1/3 h-[353px] items-center'
          key={key}
        >
          <img className='mb-10 mt-5' src={item.image} />
          <h3 className='text-primary-brand-color text-xl font-semibold mb-3'>
            {item.title}
          </h3>
          <span className='text-color-gray-storm'>{item.desc}</span>
        </div>
      ))}
    </div>
  );
}
