import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  text-transform: uppercase;

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

  .sideBar {
    width: 35%;
    height: 50%;
    margin-left: 5%;
    border-radius: 0 0px 10px 10px;

    z-index: 9;
    position: absolute;
    background-color: #202029;
    opacity: 0.2;
  }
`;

export const InfoProduct = styled.div`
  width: 35%;
  height: 50%;
  margin-left: 8%;
  margin-top: 5%;

  position: absolute;
  top: 0;
  z-index: 10;

  h2 {
    color: #fff;
    font-weight: bold;
    margin-top: -10px;
  }

  h3 {
    color: #0448f2;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
  }

  p {
    background-color: #0448f2;
    color: #fff;
    width: 200px;
    padding: 10px;
    margin-top: 35px;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 0 5px 0 5px;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
      color: #202029;
    }
  }
`;
