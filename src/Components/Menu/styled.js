import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;

  width: 100%;
  text-transform: uppercase;
  z-index: 999;

  svg {
    color: #fff;
  }

  @media (max-width: 1200px) {
    li:last-child {
      margin-right: 150px !important;
    }
  }

  @media (max-width: 1024px) {
    li {
      margin: 0 10px !important;
    }

    li:last-child {
      margin-right: 75px !important;
    }
  }
`;

export const Info = styled.div`
  background-color: #ebebeb;
  height: 26px;
  display: flex;
  align-items: center;
`;

export const P = styled.p`
  font-size: 0.75rem;
  margin: 0 auto;
`;

export const LinkTroca = styled.a`
  font-size: 0.7rem;
  margin: 0 20px 0 0;
  cursor: pointer;
  text-transform: none !important;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

export const ContainerMenu = styled.div`
  background-color: #000;
  height: 77px;
  display: flex;
  color: #fff;
`;

export const ContentMenu = styled.div`
  max-width: 95%;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;

  img {
    width: 40px;
    height: 26.329px;
    margin-right: 4vw;
  }

  span {
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    margin: 0 25px;
    cursor: pointer;
  }

  svg {
    font-size: 1.35rem;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;

  li:last-child {
    margin-right: 200px;
  }
`;

export const ListItem = styled.li`
  cursor: pointer;
  display: inline;
  font-size: 12px;
  font-weight: bold;
  margin: 0 20px;

  &:hover {
    border-bottom: 3px solid #fff;
  }
`;

export const Search = styled.div`
  height: 38px;
  width: 239px;
  display: flex;

  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #727273;

  svg {
    color: #000;
    font-size: 1.5rem;
    justify-content: center;
    display: block;
    margin: auto;
    padding: 2px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SearchInput = styled.input`
  max-width: 70%;
  margin: 10px;

  border-radius: 0;
  border: 0;

  font-size: 15px;
  color: #727273;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;
