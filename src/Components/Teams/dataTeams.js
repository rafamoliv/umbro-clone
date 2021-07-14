import { v4 as uuidv4 } from "uuid";

import Athletico from "../../Assets/Images/Shields/athletico-paranaense.png";
import Avai from "../../Assets/Images/Shields/avai.png";
import Chape from "../../Assets/Images/Shields/chape.png";
import Flu from "../../Assets/Images/Shields/fluminense.png";
import Gremio from "../../Assets/Images/Shields/gremio.png";
import Santos from "../../Assets/Images/Shields/santos.png";
import Sport from "../../Assets/Images/Shields/sport.png";

const dataTeams = [
  {
    id: uuidv4(),
    team: "Athletico Paranaense",
    img: Athletico,
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    team: "Avaí",
    img: Avai,
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    team: "Chapecoense",
    img: Chape,
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    team: "Fluminense",
    img: Flu,
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    team: "Grêmio",
    img: Gremio,
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    team: "Santos",
    img: Santos,
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    team: "Sport",
    img: Sport,
    linkProduct: "/",
  },
];

export default dataTeams;
