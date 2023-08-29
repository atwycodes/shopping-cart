import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/main/Body";
import ShoppingCart from "./components/header/ShoppingCart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      <Header />
      <Body />
      <ShoppingCart />
    </div>
  );
}

export default App;
