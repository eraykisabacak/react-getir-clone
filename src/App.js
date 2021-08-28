import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import Campanies from './components/Campanies'
import Favorites from './components/Favorites'
import MobileApp from './components/MobileApp'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Categories/>
      <Campanies/>
      <Favorites/>
      <MobileApp/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
