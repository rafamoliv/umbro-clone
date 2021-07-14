import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 60px;
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
