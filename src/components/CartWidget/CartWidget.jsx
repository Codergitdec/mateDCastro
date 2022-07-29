import React, { useContext } from "react";
import cart from "./cart.svg";
import { CartContext } from "../../context/useContext";

const CartWidget = () => {
  
  const { items } = useContext(CartContext)
  let itemsInCart = 0;

  items.map((item) => {
    itemsInCart = itemsInCart + item.count;
  })
  
  return (

<>
<div className="itemsInCart">
    {itemsInCart}
</div>
<img src={cart} alt="cart" />

</>
  );
};

export default CartWidget;
