import styled from "styled-components";

export const Container = styled.div`
  margin: 25px 0;

  a {
    text-decoration: none;
  }
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  li:nth-child(2n) {
    margin: 0 5px;
  }
`;

export const ItemsList = styled.li`
  &:hover {
    border: 1px solid #d3d3d3;
    border-radius: 5px;
  }

  img {
    width: 100%;
    height: 65%;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }

  p {
    color: #000;
    text-align: center;
    font-size: 1rem;
  }

  h4 {
    text-align: center;
    color: #000;
  }

  h5 {
    text-align: right;
    text-decoration: line-through;
    margin: -10px 10px -10px 0;
    padding: 10px;
    color: #d3d3d3;
  }
`;
