import { v4 as uuidv4 } from "uuid";

import Campo from "../../Assets/Images/Category/first.jpg";
import Society from "../../Assets/Images/Category/second.jpg";
import Futsal from "../../Assets/Images/Category/third.jpg";

const dataCategory = [
  {
    id: uuidv4(),
    productCategory: "Campo",
    img: Campo,
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    productCategory: "Futsal",
    img: Futsal,
    linkProduct: "/",
  },
  {
    id: uuidv4(),
    productCategory: "Society",
    img: Society,
    linkProduct: "/",
  },
];

export default dataCategory;
