import React from "react";
import { Container, Info, MenuSelect, P, LinkTroca } from "./styled";

export default function Menu() {
  return (
    <Container>
      <Info>
        <P>FRETE GRÁTIS BRASIL ACIMA DE R$ 149,90</P>
        <LinkTroca>Trocas e Devoluções</LinkTroca>
      </Info>
      <MenuSelect>
        <h1>menu</h1>
      </MenuSelect>
    </Container>
  );
}
