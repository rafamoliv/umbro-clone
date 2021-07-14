import React from "react";
import { Link } from "react-router-dom";
import { Banner, Body, Container } from "./styled";
import ImgBanner from "../../Assets/Images/Banners/bannerMiddle.jpg";

import Carousel from "../../Components/Carousel";
import Menu from "../../Components/Menu";
import Teams from "../../Components/Teams";

export default function Landing() {
  return (
    <Container>
      <Menu />
      <Carousel />

      <Body>
        <h3>Nós Somos</h3>
        <Teams />

        <Link to="/">
          <Banner src={ImgBanner} alt="Banner Comercial" />
        </Link>

        <h3>Seleção de Inverno</h3>
      </Body>
    </Container>
  );
}
