import React from "react";
import { Container, Info, ContainerMenu, P, LinkTroca, ContentMenu, MenuList, ListItem, Search, SearchInput } from "./styled";
import logoUmbro from "../../Assets/Images/Icons/umbroSmall.png";
import { GiShoppingBag } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Container>
      <Info>
        <P>FRETE GRÁTIS BRASIL ACIMA DE R$ 149,90</P>
        <LinkTroca>Trocas e Devoluções</LinkTroca>
      </Info>

      <ContainerMenu>
        <ContentMenu>
          <Link src="/">
            <img src={logoUmbro} alt="Logo UMBRO" />
          </Link>

          <MenuList>
            <ListItem>Clubes</ListItem>
            <ListItem>Roupas</ListItem>
            <ListItem>LifeStyle</ListItem>
            <ListItem>Chuteiras</ListItem>
            <ListItem>Acessórios</ListItem>
            <ListItem>Outlet</ListItem>
          </MenuList>

          <Search>
            <SearchInput placeholder="Buscar" />
            <GoSearch />
          </Search>

          <span>
            Faça
            <br />
            seu
            <br />
            login
          </span>

          <Link to="/">
            <GiShoppingBag />
          </Link>
        </ContentMenu>
      </ContainerMenu>
    </Container>
  );
}
