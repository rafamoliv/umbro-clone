import React from "react";
import { Link } from "react-router-dom";
import dataCategory from "./dataCategory";
import { CategoryList, Container, ItemsList } from "./styled";

function Category() {
  return (
    <Container>
      <CategoryList>
        {dataCategory.map((obj, index) => {
          return (
            <>
              <ItemsList>
                <h3>{obj.productCategory}</h3>
                <Link to={obj.linkProduct}>
                  <img src={obj.img} alt={obj.productCategory} />
                </Link>
              </ItemsList>
            </>
          );
        })}
      </CategoryList>
    </Container>
  );
}

export default Category;
