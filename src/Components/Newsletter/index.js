import React, { useState } from "react";
import { AssignNews, Button, Container, InfoContent, InfoText, Input } from "./styled";
import Email from "../../Assets/Images/Icons/email.png";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //const [register, setRegister] = useState(false);

  let registerDB = [];

  if (localStorage.getItem("registerSuccess") === null) {
    registerDB = [];
  } else {
    registerDB = localStorage.getItem("registerSuccess");
    registerDB = JSON.parse(registerDB);
  }

  function saveRegister() {
    const saveName = name;
    const saveEmail = email;

    registerDB.push({ saveName, saveEmail });
    localStorage.setItem("/Register", JSON.stringify(registerDB));
    //setRegister(true);
  }

  return (
    <Container>
      <InfoContent>
        <img alt="email" src={Email} />
        <InfoText>
          <h4>CADASTRE-SE E</h4>
          <h1>GANHE 10% OFF*</h1>
          <h4>*DESCONTO VÁLIDO PARA A PRIMEIRA COMPRA PARA PEDIDOS ACIMA DE R$149,90</h4>
        </InfoText>
      </InfoContent>

      <AssignNews>
        <Input name="Nome" id="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <Input name="Email" id="email" placeholder="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button type="button" onClick={(e) => saveRegister({ name, email })}>
          Cadastrar
        </Button>
      </AssignNews>
    </Container>
  );
}

export default Newsletter;
