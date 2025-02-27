import React from "react";
import { Element, Link, animateScroll as scroll } from "react-scroll";

import "./Home.css";
import DestinasiCarousel from "./Carousel/Carousel";
import BeritaScreen from "./Berita/BeritaScreen";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero-section">
          <h1 className="hero-title">Selamat datang di Desa Manud Jaya</h1>
          <p className="hero-subtitle">
            Temukan keindahan alam dan budaya kami yang luar biasa.
          </p>
          <Link
            onClick={() => {
              scroll.scrollToTop({
                duration: 100, // Durasi animasi dalam milidetik
                smooth: "easeInOutQuart", // Efek easing (percepatan/perlambatan)
              });
            }}
            to="destinasi-carousel"
            smooth={true}
            duration={100}
          >
            <button className="hero-button">Pelajari Lebih Lanjut</button>
          </Link>
        </div>
      </div>
      <div className="side-container">
            <div className="sidebar">
              <h1>Jadwal Ronda</h1> 
              <p>Senin: Cahyo Prima, Dusun 1</p>
              <p>Selasa: Bambang Surya, Dusun 3</p>
            </div>
      </div>
      {/* <Element name="destinasi-carousel" className="element"> */}
        {/* Gunakan Element untuk menandai elemen yang akan di-scroll */}
        {/* <DestinasiCarousel /> */}
      {/* </Element> */}
      {/* <div className="divider"></div> */}
      {/* <BeritaScreen /> */}
    </>
  );
};

export default Home;
