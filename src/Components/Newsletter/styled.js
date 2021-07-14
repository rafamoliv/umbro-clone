import styled from "styled-components";

export const Container = styled.div`
  background: url("https://umbro.vteximg.com.br/arquivos/umbro-newsletter-bg-desktop.png");
  margin-top: 0;
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;

  img {
    display: block;
    margin: 20px 20px 0 0;
    max-width: 64px;
    max-height: 48px;
  }
`;

export const InfoText = styled.div`
  h1 {
    font-size: 2.5rem;
    letter-spacing: -1px;
    margin: -15px 0 -15px 0;
    color: #06369d;
  }

  h4 {
    font-size: 0.7rem;
  }
`;

export const AssignNews = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 30px;

  input:nth-child(2) {
    margin: 0 8px 0 8px;
  }
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 2.5rem;
  width: 15rem;
  padding: 0 1rem;
  text-transform: uppercase;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  background-color: #06369d;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8rem;
  padding: 0.8rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    opacity: 0.9;
  }
`;
