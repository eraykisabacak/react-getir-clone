import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';

export default function Footer() {
  return (
    <div className='bg-white p-10 mt-10'>
      <div className='container mx-auto justify-between flex flex-row '>
        <div className='flex flex-col gap-4'>
          <span className='text-lg text-primary-brand-color'>
            Getir'i indirin!
          </span>
          <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg' />
          <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg' />
          <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg' />
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-lg text-primary-brand-color'>
            Getir'i keşfedin
          </span>
          <span className='text-color-black'>Hakkımızda</span>
          <span className='text-color-black'>Kariyer</span>
          <span className='text-color-black'>İletişim</span>
          <span className='text-color-black'>Covid 19 Duyurusu</span>
          <span className='text-color-black'>Sosyal Sorumluluk Projeleri</span>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-lg text-primary-brand-color'>
            Yardıma mı ihtiyacınız var?
          </span>
          <span className='text-color-black'>Sıkça Sorulan Sorular</span>
          <span className='text-color-black'>Kişisel Verilerin Korunması</span>
          <span className='text-color-black'>Gizlilik Politikası</span>
          <span className='text-color-black'>Kullanım Koşulları</span>
          <span className='text-color-black'>Çerez Politikası</span>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-lg text-primary-brand-color'>
            İş Ortağımız Olun
          </span>
          <span className='text-color-black'>Bayimiz Olun</span>
          <span className='text-color-black'>Deponuzu Kiralayın</span>
          <span className='text-color-black'>GetirYemek Restoranı Olun</span>
          <span className='text-color-black'>GetirÇarşı İşletmesi Olun</span>
        </div>
      </div>
      <div className='container mx-auto border-t border-gray-100 mt-5 p-5 flex flex-row justify-between items-center'>
        <div className='flex gap-x-8'>
          <span className='text-sm font-normal'>© 2021 Getir</span>
          <span className='text-sm text-primary-brand-color relative before:w-1 before:h-1 before:bg-black before:rounded-full before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 '>
            Bilgi Toplumu Hizmetleri
          </span>
        </div>
        <div className='flex gap-x-8'>
          <IoLogoFacebook className='w-8 h-8 text-gray-500 transition-all rounded-lg hover:bg-brand-color hover:text-primary-brand-color hover:bg-opacity-10'></IoLogoFacebook>
          <IoLogoTwitter className='w-8 h-8 text-gray-500 transition-all rounded-lg hover:bg-brand-color hover:text-primary-brand-color hover:bg-opacity-10'></IoLogoTwitter>
          <IoLogoInstagram className='w-8 h-8 text-gray-500 transition-all rounded-lg hover:bg-brand-color hover:text-primary-brand-color hover:bg-opacity-10'></IoLogoInstagram>
          <a
            href='/'
            className='flex justify-center items-center space-x-3 border-2 rounded-lg pl-2 pr-2 border-gray-100'
          >
            <div className='w-4 h-4 text-[dbdbff]'>
              <svg
                className='fill-current text-gray-700'
                color='#dbdbff'
                size='16'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
              >
                <path
                  d='M16 0c-8.873 0-16 7.127-16 16s7.127 16 16 16c8.873 0 16-7.127 16-16s-7.127-16-16-16zM28.945 14.545h-5.818c-0.291-4.073-1.6-7.855-3.927-11.2 5.236 1.309 9.164 5.818 9.745 11.2zM20.218 14.545h-8.436c0.291-3.927 1.745-7.709 4.218-10.764 2.473 3.055 3.927 6.836 4.218 10.764zM12.655 3.345c-2.182 3.345-3.491 7.127-3.782 11.2h-5.818c0.582-5.382 4.509-9.891 9.6-11.2zM3.055 17.455h5.818c0.291 4.073 1.6 7.855 3.927 11.2-5.236-1.309-9.164-5.818-9.745-11.2zM16 28.218c-2.473-3.2-3.927-6.836-4.218-10.764h8.582c-0.436 3.927-1.891 7.709-4.364 10.764zM19.345 28.655c2.182-3.345 3.636-7.127 3.927-11.2h5.818c-0.727 5.382-4.655 9.891-9.745 11.2z'
                  class='style__Path-sc-__sc-hqksj3-2 kqvXtw'
                ></path>
              </svg>
            </div>
            <span className='text-gray-700'>Türkçe (TR)</span>
          </a>
        </div>
      </div>
    </div>
  );
}
