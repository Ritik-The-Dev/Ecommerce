import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import NewCollection from "./Components/Collection";
import SpecialCollection from "./Components/SpecialCollection";
import OfferSection from "./Components/OfferSection";
import BlogSection from "./Components/BlogSection";
import AboutUs from "./Components/AboutUs";
import Popular from "./Components/Popular";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSetRecoilState } from "recoil";
import { CartItem, LikedItem } from "./Recoil";
function App() {
  const setCartItem = useSetRecoilState(CartItem)
  const setLikedItem = useSetRecoilState(LikedItem)
  const HomeRef = useRef(null)
  const CollectionRef = useRef(null)
  const SpecialRef = useRef(null)
  const MissionRef = useRef(null)
  const AboutRef = useRef(null)
  const PopularRef = useRef(null)

  const GoToTop = () => {
    if (HomeRef.current) {
      HomeRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToWithOffset = (elementRef, offset) => {
    if (elementRef.current) {
      const yOffset = offset;
      const y = elementRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const GoToCollection = () => scrollToWithOffset(CollectionRef, -130);
  const GoToSpecial = () => scrollToWithOffset(SpecialRef, -150);
  const GoToMission = () => scrollToWithOffset(MissionRef, -130);
  const GoToAbout = () => scrollToWithOffset(AboutRef, -150);
  const GoToPopular = () => scrollToWithOffset(PopularRef, -200);

  useEffect(() => {
    const LocalCartData = localStorage.getItem('LocalCartItem')
    const LocalLikedData = localStorage.getItem('LocalLikedItem')
    if (LocalCartData) {
      const CartItems = JSON.parse(LocalCartData)
      setCartItem(CartItems)
    }
    if (LocalLikedData) {
      const LikedItems = JSON.parse(LocalLikedData)
      setLikedItem(LikedItems)
    }
  }, [])

  return (
    <div>
      <ToastContainer />
      <div className='max-w-screen w-full bg-cover h-screen'
        style={{
          backgroundImage: `url(/Banner.jpg)`
        }}>
        <Navbar GoToTop={GoToTop}
          GoToCollection={GoToCollection}
          GoToSpecial={GoToSpecial}
          GoToMission={GoToMission}
          GoToAbout={GoToAbout}
          GoToPopular={GoToPopular} />
        <Banner GoToTop={GoToTop} HomeRef={HomeRef} />
      </div>
      <NewCollection CollectionRef={CollectionRef} />
      <SpecialCollection SpecialRef={SpecialRef} />
      <OfferSection />
      <BlogSection MissionRef={MissionRef} />
      <AboutUs AboutRef={AboutRef} />
      <Popular PopularRef={PopularRef} />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App;