export default function Category({ category: { id, title, image } }) {
  return (
    <div className=' w-[108px] h-[108px] group items-center hover:bg-categories-hover mr-3 mt-3 flex flex-col'>
      <img
        className='h-12	w-12 border rounded-lg border-gray-200 mx-auto mb-3 mt-3'
        src={image}
      />
      <span className='mx-auto font-semibold text-sm text-color-gray-dark group-hover:text-brand-color whitespace-nowrap'>
        {title}
      </span>
    </div>
  );
}
