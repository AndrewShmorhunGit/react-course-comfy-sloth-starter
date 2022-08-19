import React, { useState } from "react";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
// import Loading from "./Loading";
// import { load } from "dotenv/types";

const ProductImages = () => {
  const { singleProductImages } = useProductsContext();
  // const [main, setMain] = useState(singleProductImages[0]);

  console.log(singleProductImages);

  return (
    <Wrapper>
      {/* <img src={main.url} alt="main image" className="main" />
      <div className="gallery">
        {singleProductImages.map((image, index) => {
          return (
            <img
              key={index}
              src={image.url}
              alt={image.filename}
              // onClick={() => setMain(singleProductImages[index])}
              // className={`${image.url === main.url ? "active" : ""}`}
            />
          );
        })}
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
