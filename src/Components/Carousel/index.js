import React, { useState } from "react";
import dataCarousel from "./dataCarousel";
import { Container } from "./styled";

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const length = dataCarousel.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(dataCarousel) || dataCarousel.length <= 0) {
    return null;
  }

  return (
    <Container>
      <p onClick={prevSlide} className="left-arrow">
        Anterior
      </p>
      <p onClick={nextSlide} className="right-arrow">
        Próximo
      </p>
      {dataCarousel.map((obj, index) => {
        return (
          <>
            <div className={index === current ? "slide active" : "slide"}>
              {index === current && <img src={obj.img} />}
              <div className="infoProduct">
                <p>{obj.title}</p>
              </div>
            </div>
            <div className="sideBar" />
          </>
        );
      })}
    </Container>
  );
}
