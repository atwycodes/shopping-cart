import React from "react";

interface Product {
  price: number;
  name: string;
  imageURL: string;
  addToCartHandler: Function;
}

function ProductCard(props: Product) {
  return (
    <div className="flex w-80 flex-col overflow-hidden rounded-2xl border-2 border-slate-500">
      <div className="flex items-center justify-center border-b-2 border-slate-500 bg-white p-4">
        <img className="h-56" src={props.imageURL} alt={props.name} />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4 bg-slate-200 p-4 text-slate-900 dark:bg-slate-800 dark:text-white">
        <div>
          <p className="text-lg font-bold">{props.name}</p>
          <p className="text-lg ">{`$ ${props.price}`}</p>
        </div>
        <button
          onClick={() => props.addToCartHandler()}
          className="rounded-lg bg-slate-800 p-0.5 text-base font-bold text-slate-50 transition-all duration-300 hover:bg-green-200 hover:text-slate-800 dark:bg-slate-50 dark:text-slate-800 dark:hover:bg-green-200"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
