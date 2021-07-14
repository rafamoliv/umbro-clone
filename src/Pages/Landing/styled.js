import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.div`
  max-width: 90%;
  margin: 0 auto;

  h3 {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-top: 50px;
  }
`;

export const Banner = styled.img`
  max-width: 110vw !important;
  margin: 0 0 0 -10% !important;
`;

export const Youtube = styled.div`
  margin-top: 60px;

  iframe {
    width: 100%;
    height: 300px;
    border-style: none;
  }
`;
