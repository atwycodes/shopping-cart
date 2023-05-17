import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

function RenderProducts() {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductDetails(json);
      });
  }, []);

  return (
    <>
      {productDetails.map((product: Product) => {
        return (
          <ProductCard
            addToCartHandler={() => {
              console.log(
                `adding product ${product.id}: ${product.title} to cart`
              );
            }}
            key={product.id}
            price={product.price}
            name={product.title}
            imageURL={product.image}
          />
        );
      })}
    </>
  );
}

export default RenderProducts;
