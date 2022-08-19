import React, { useEffect, useState } from "react";
import { useProductsContext } from "../context/products_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
    toggleFeatureProducts,
    show: show,
  } = useProductsContext();

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>fetured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(`${show ? 3 : featured}`).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <div className="buttons">
        <button className="btn" onClick={toggleFeatureProducts}>
          {show ? "show more" : "show less"}
        </button>
        <br />
        <button className="btn">all products</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: inline;
    margin: 0 40rem 0 40rem;
  }

  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    padding: 0 auto;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
