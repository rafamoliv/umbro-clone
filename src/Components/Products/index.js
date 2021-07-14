import React from "react";
import { Link } from "react-router-dom";
import dataProducts from "./dataProducts";
import { Container, ProductsList, ItemsList } from "./styled";

export default function Products() {
  return (
    <Container>
      <ProductsList>
        {dataProducts.map((obj, index) => {
          return (
            <>
              <ItemsList>
                <Link to={obj.linkProduct}>
                  <img src={obj.img} alt={obj.name} />
                  <p>{obj.name}</p>

                  <h5>De: R$ {obj.price}</h5>
                  <h4>Por: R$ {obj.priceDesc}</h4>
                </Link>
              </ItemsList>
            </>
          );
        })}
      </ProductsList>
    </Container>
  );
}
