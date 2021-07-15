import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Sections = styled.div`
  h4 {
    color: #fff;
    text-align: center;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ItemsList = styled.li`
  a {
    color: #777777;
    text-decoration: none;
    font-size: 0.8rem;

    &:hover {
      color: #fff;
    }
  }
`;

export const SocialMedias = styled.div`
  text-align: center;
  font-size: 2rem;

  svg {
    color: #777777;

    &:hover {
      color: #fff;
    }
  }
`;
