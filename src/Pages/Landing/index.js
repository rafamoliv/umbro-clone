import React from "react";
import Carousel from "../../Components/Carousel";
import Menu from "../../Components/Menu";
import { Body, Container } from "./styled";

function Landing() {
  return (
    <Container>
      <Menu />
      <Carousel />

      <Body>
        <h3>Nós Somos</h3>
      </Body>
    </Container>
  );
}

export default Landing;
