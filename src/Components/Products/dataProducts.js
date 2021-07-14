import { v4 as uuidv4 } from "uuid";

import First from "../../Assets/Images/Products/first.jpg";
import Second from "../../Assets/Images/Products/second.jpg";
import Third from "../../Assets/Images/Products/third.jpg";
import Fourth from "../../Assets/Images/Products/fourth.jpg";
import Fifth from "../../Assets/Images/Products/fifth.jpg";

const dataProducts = [
  {
    id: uuidv4(),
    name: "Jaqueta Masculina Umbro Tape Diamond",
    img: First,
    price: "299,00",
    priceDesc: "249,00",
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    name: "Blusão Feminino Umbro Umbro Strip",
    img: Second,
    price: "189,90",
    priceDesc: "179,90",
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    name: "Windbreak Masculino Umbro Diamond Duo",
    img: Third,
    price: "239,90",
    priceDesc: "229,00",
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    name: "Blusão Masculino Umbro Diamond Duo",
    img: Fourth,
    price: "169,90",
    priceDesc: "139,90",
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    name: "Blusão Masculino Umbro Heritage Top",
    img: Fifth,
    price: "159,90",
    priceDesc: "119,90",
    linkProduct: "/",
  },
];

export default dataProducts;
