import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;

  @media (max-width: 768px) {
    li {
      margin: 0 10px !important;
    }

    img {
      max-height: 50px;
    }
  }

  @media (max-width: 425px) {
    ul {
      grid-template-columns: repeat(2, 1fr);

      /* li:nth-child(7) {
        margin-left: 215px !important;
      } */
    }

    img {
      max-height: 57px;
    }
  }
`;

export const TeamsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const ItemsList = styled.li`
  display: inline;
  font-size: 12px;
  font-weight: bold;
  margin: 0 20px;
  text-align: center;

  a {
    text-decoration: none;
  }

  img {
    max-height: 63px;

    &:hover {
      transform: scale(1.5);
      transition: transform 0.5s ease;
    }
  }

  h4 {
    text-transform: uppercase;
    color: #000;
  }
`;
