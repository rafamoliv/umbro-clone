import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;

  img {
    width: 100vw;
    max-height: 100vh;
    z-index: 5;
  }

  .right-arrow,
  .left-arrow {
    position: absolute;
    top: 80%;
    z-index: 10;
    cursor: pointer;

    text-transform: uppercase;
    font-size: 0.8rem;
    color: #fff;
  }

  .right-arrow {
    left: 150px;
    font-weight: bold;
  }

  .left-arrow {
    left: 75px;
  }

  .slide {
    opacity: 0;
    transition-duration: 0.1s ease-in-out;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 0.1s;
  }

  .infoProduct {
    width: 50%;
    height: 50%;
    position: absolute;
    z-index: 10;
  }

  .sideBar {
    width: 35%;
    height: 50%;
    margin-left: 5%;
    border-radius: 0 0px 10px 10px;

    z-index: 9;
    position: absolute;
    background-color: #202029;
    opacity: 0.1;
  }
`;
