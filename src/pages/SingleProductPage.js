import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const {
    singleProduct_loading: loading,
    singleProduct_error: error,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext();

  const { id } = useParams();
  const history = useHistory();
  console.log(singleProduct);
  useEffect(() => {
    error &&
      setTimeout(() => {
        history.push("/");
      }, 3000);
  }, [error]);

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // console.log(url + id);
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }
  const {
    name,
    price,
    description,
    stars,
    stock,
    reviews,
    id: sku,
    company,
    images,
  } = singleProduct;
  return (
    <Wrapper>
      <PageHero title={`products / ${name}`} />
      <div className="section section-center page"></div>
      <Link to="/products" className="btn">
        back to products
      </Link>
      <div className="product-center">
        <ProductImages key={id} {...singleProduct} />
        <section className="content">
          <h2>{name}</h2>
          <Stars />
          <h5 className="price">{formatPrice(price)}</h5>
          <p className="desc">{description}</p>
          <p className="info">
            <span>Available : {stock ? "In stock" : "Out of stuck"}</span>
          </p>
          <p className="info">
            <span>SKU : {sku}</span>
          </p>
          <p className="info">
            <span>Brand : {company}</span>
          </p>
          <hr />
          {stock && <AddToCart />}
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
