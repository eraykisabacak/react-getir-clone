export default function Favorites({ product }) {
  return (
    <div className='flex flex-col items-center relative space-y-0.5 text-center overflow-hidden bg-white p-3'>
      <button className=' rounded-lg text-brand-color shadow-lg absolute right-0 top-3 w-8 h-8 items-center justify-center font-bold hover:bg-brand-color hover:text-white transition-all'>
        <span>+</span>
      </button>
      <img className='w-24 h-24' src={product.image} />
      <span className='text-brand-color font-semibold'>₺{product.price}</span>
      <span className='font-semibold'>{product.title}</span>
      <span className='text-brand-color'>{product.alt}</span>
    </div>
  );
}
