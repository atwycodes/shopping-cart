import React from "react";

function ShoppingCart() {
  return (
    <img
      className="fixed bottom-10 right-10 h-14 w-14 cursor-pointer rounded-full bg-white py-2 hover:opacity-80"
      src="/src/imgs/cart-variant.svg"
      alt="cart-icon"
    />
  );
}

export default ShoppingCart;
