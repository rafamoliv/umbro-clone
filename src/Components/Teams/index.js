import React from "react";
import { Container, ItemsList, TeamsList } from "../Teams/styled";
import Athletico from "../../Assets/Images/Shields/athletico-paranaense.png";
import Avai from "../../Assets/Images/Shields/avai.png";
import Chape from "../../Assets/Images/Shields/chape.png";
import Flu from "../../Assets/Images/Shields/fluminense.png";
import Gremio from "../../Assets/Images/Shields/gremio.png";
import Santos from "../../Assets/Images/Shields/santos.png";
import Sport from "../../Assets/Images/Shields/sport.png";
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
                  <img src={obj.img} />
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
