export default function MobileApp() {
  return (
    <div className='container mx-auto rounded-lg w-full h-[300px] mt-3 bg-primary-brand-color flex  justify-between bg-mobile-app-pattern'>
      <div className='flex flex-col p-8 space-y-5 mt-10 ml-4 mb-5'>
        <span className='text-white text-[26px] font-bold block'>
          Getir'i indirin!
        </span>
        <span className='text-white text-lg font-semibold'>
          İstediğiniz ürünleri dakikalar içinde kapınıza
          <br /> getirelim.
        </span>
        <div className='flex flex-row justify-between space-x-2 top-0'>
          <img
            className='transition-all hover:scale-105'
            src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'
          />
          <img
            className='transition-all hover:scale-105'
            src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'
          />
          <img
            className='transition-all hover:scale-105'
            src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'
          />
        </div>
      </div>
      <img
        className='pt-4'
        src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'
      />
    </div>
  );
}
