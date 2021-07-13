import { v4 as uuidv4 } from "uuid";

import Flu from "./../../Assets/Images/Carousel/flubranca.jpg";
import Neptune from "./../../Assets/Images/Carousel/neptune2.jpg";
import SalaZ from "./../../Assets/Images/Carousel/famliaz.jpg";
import Inverno from "./../../Assets/Images/Carousel/agasalhos.jpg";
import Collections from "./../../Assets/Images/Carousel/collections.jpg";
import Treino from "./../../Assets/Images/Carousel/treino.jpg";

const dataCarousel = [
  {
    id: uuidv4(),
    title: "Trajado de Glórias",
    subTitle: "Novas armaduras do fluminense",
    img: Flu,
  },
  {
    id: uuidv4(),
    title: "Neptune",
    subTitle: "Releitura e nostalgia",
    img: Neptune,
  },
  {
    id: uuidv4(),
    title: "Umbro Collections",
    subTitle: "Um FEAT especial com as músicas",
    img: Collections,
  },
  {
    id: uuidv4(),
    title: "Seleção de inverno",
    subTitle: "Até 45% OFF",
    img: Inverno,
  },
  {
    id: uuidv4(),
    title: "Vista as cores do seu time",
    subTitle: "Linha de treino e viagem",
    img: Treino,
  },
  {
    id: uuidv4(),
    title: "Umbro Sala Z",
    subTitle: "Pra que sabe o que faz com a bola",
    img: SalaZ,
  },
];

export default dataCarousel;
