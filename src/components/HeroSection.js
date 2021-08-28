import Slider from "react-slick";

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
    return (
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
            <Slider {...settings}>
            <div>
                <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"></img>
            </div>
            <div>
                <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"></img>
            </div>
            </Slider>
            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
                <div>
                    <img className="w-[180px]" src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>
                    <h3 className="font-semibold text-white text-4xl mt-10 ">Dakikalar içinde<br/> kapınızda</h3>
                </div>
                <div className="w-[400px] h-[300px] bg-white rounded-lg items-center text-center p-6 space-y-5">
                    <h1 className="text-brand-color text-lg font-semibold mx-auto">Giriş yap veya kayıt ol</h1>
                    <button className="bg-brand-yellow rounded-lg w-[350px] h-[48px] font-semibold text-brand-color">Telefon numarası ile devam et</button>
                    <span className="h-2 border-1 w-full"></span>
                    <button className="bg-fb-text rounded-lg w-[350px] h-[48px] mt-2 font-semibold text-brand-color">Facebook ile devam et</button>
                </div>
            </div>
      </div>
    )
}
