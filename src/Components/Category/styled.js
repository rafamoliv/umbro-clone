import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    img {
      width: 253px !important;
      height: 158px !important;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 168px !important;
      height: 105px !important;
    }

    h3 {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 100% !important;
      height: 180px !important;
    }

    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  li:nth-child(2) {
    margin: 0 5px;
  }
`;

export const ItemsList = styled.li`
  a {
    text-decoration: none;
  }

  img {
    width: 380px;
    height: 230px;

    &:hover {
      transform: scale(1.01);
      transition: transform 0.25s ease;
    }
  }

  h3 {
    margin-left: 5px;
    text-align: left;
    color: #000;
  }
`;
