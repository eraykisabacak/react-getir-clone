import { useState, useEffect } from 'react';
import categoryData from '../api/categories.json';
import Category from './Category';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCategories(categoryData);
    }, 1000);
  }, []);

  return (
    <div className='bg-white py-4'>
      <div className='container mx-auto'>
        <span className='font-semibold text-sm mb-3'>Kategoriler</span>
        <div className='grid grid-cols-10'>
          {!categories.length && 'Yükleniyor..'}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
