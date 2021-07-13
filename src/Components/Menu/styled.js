import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
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
  margin: 0 10px 0 0;
  cursor: pointer;

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
  max-width: 80vw;
  margin: auto;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 100%;
  }
`;

export const MenuList = styled.div``;

export const Pesquisa = styled.div``;
