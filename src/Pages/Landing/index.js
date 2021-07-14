import React from "react";
import { Link } from "react-router-dom";
import { Banner, Body, Container, Youtube } from "./styled";
import ImgBanner from "../../Assets/Images/Banners/bannerMiddle.jpg";

import Carousel from "../../Components/Carousel";
import Menu from "../../Components/Menu";
import Teams from "../../Components/Teams";
import Category from "../../Components/Category";
import Products from "../../Components/Products";
import Newsletter from "../../Components/Newsletter";
import Footer from "../../Components/Footer";

export default function Landing() {
  return (
    <Container>
      <Menu />
      <Carousel />

      <Body>
        <div>
          <h3>Nós Somos</h3>
          <Teams />
        </div>

        <Category />

        <Link to="/">
          <Banner src={ImgBanner} alt="Banner Comercial" />
        </Link>

        <h3>Seleção de Inverno</h3>
        <Products />
      </Body>

      <Youtube>
        <iframe title="Umbro Collections" src="https://www.youtube.com/embed/mlDZWFNR0dM?enablejsapi=1&origin=https%3A%2F%2Fwww.umbro.com.br" />
      </Youtube>

      <Newsletter />
      <Footer />
    </Container>
  );
}
