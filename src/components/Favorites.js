import { useState, useEffect } from 'react';
import products from '../api/products.json';
import ProductItem from './ProductItem';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setFavorites(products);
    }, 1000);
  }, []);

  return (
    <div className='container mx-auto'>
      <span className='font-semibold text-sm mb-3 mt-6'>Favoriler</span>
      <div className='mt-5 grid grid-cols-8 gap-[1px]'>
        {favorites.map((item, key) => (
          <ProductItem product={item}></ProductItem>
        ))}
      </div>
    </div>
  );
}
