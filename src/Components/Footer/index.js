import React from "react";
import { Link } from "react-router-dom";
import { Container, ItemsList, List, Sections, SocialMedias } from "./styled";
import { RiFacebookFill, RiInstagramFill, RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

function Footer() {
  return (
    <Container>
      <Sections>
        <h4>Produtos</h4>
        <List>
          <ItemsList>
            <Link to="/">Clubes</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Roupas</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">LifeStyle</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Chuteiras</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Acessórios</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Outlet</Link>
          </ItemsList>
        </List>
      </Sections>

      <Sections>
        <h4>Ajuda</h4>
        <List>
          <ItemsList>
            <Link to="/">Minha Conta</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Fale Conosco</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Prazo de Entrega</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Trocas e Devoluções</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Portal do Lojista</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Termos e Condições</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Política de Privacidade</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Contrato de Compra e Venda</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Remover Cookies</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Regulamentos</Link>
          </ItemsList>
        </List>
      </Sections>

      <Sections>
        <h4>Explore Umbro</h4>
        <List>
          <ItemsList>
            <Link to="/">Sobre a UMBRO</Link>
          </ItemsList>
          <ItemsList>
            <Link to="/">Imprensa</Link>
          </ItemsList>
        </List>
      </Sections>

      <Sections>
        <h4>Fique Conectado</h4>
        <SocialMedias>
          <Link to="/">
            <RiFacebookFill />
          </Link>
          <Link to="/">
            <RiInstagramFill />
          </Link>
          <Link to="/">
            <RiTwitterFill />
          </Link>
          <Link to="/">
            <RiYoutubeFill />
          </Link>
        </SocialMedias>
      </Sections>
    </Container>
  );
}

export default Footer;
