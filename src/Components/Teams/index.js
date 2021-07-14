import React from "react";
import { Container, ItemsList, TeamsList } from "../Teams/styled";
import { Link } from "react-router-dom";
import dataTeams from "./dataTeams";

export default function Teams() {
  return (
    <Container>
      <TeamsList>
        {dataTeams.map((obj, map) => {
          return (
            <>
              <ItemsList>
                <Link to={obj.linkProduct}>
                  <img src={obj.img} alt="Team Shield" />
                  <h4>{obj.team}</h4>
                </Link>
              </ItemsList>
            </>
          );
        })}
      </TeamsList>
    </Container>
  );
}
