import React from "react";
import { Container, Info, ContainerMenu, P, LinkTroca, ContentMenu, MenuList, Pesquisa } from "./styled";
import logoUmbro from "../../Assets/Images/Icons/umbroSmall.png";
import { GiShoppingBag } from "react-icons/gi";
import { GoSearch } from "react-icons/go";

export default function Menu() {
  return (
    <Container>
      <Info>
        <P>FRETE GRÁTIS BRASIL ACIMA DE R$ 149,90</P>
        <LinkTroca>Trocas e Devoluções</LinkTroca>
      </Info>
      <ContainerMenu>
        <ContentMenu>
          <img src={logoUmbro} />
          <MenuList>
            <ul>
              <li>Clubes</li>
              <li>Roupas</li>
              <li>LifeStyle</li>
              <li>Chuteiras</li>
              <li>Acessórios</li>
              <li>Outlet</li>
            </ul>
          </MenuList>
          <Pesquisa>
            <input placeholder="Buscar" />
            <GoSearch />
          </Pesquisa>
          <span>Faça seu login</span>
          <GiShoppingBag />
        </ContentMenu>
      </ContainerMenu>
    </Container>
  );
}
