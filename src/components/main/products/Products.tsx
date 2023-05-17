import React from "react";
import RenderProducts from "./utils/RenderProducts";

type Cart = {
  cartState: object[];
  cartStateHandler: Function;
};

function Products() {
  return (
    <div className="grid place-content-center gap-8 md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto]">
      <RenderProducts />
    </div>
  );
}

export default Products;
