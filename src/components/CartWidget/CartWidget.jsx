import React, { useContext } from "react";
import cart from "./cart.svg";
import { CartContext } from "../../context/useContext";

const CartWidget = () => {
  const { items } = useContext(CartContext)
  /* let itemsInCart = 0

  items.map((item) => {
    itemsInCart = itemsInCart + item.count;
  })
  Nada de esto lo deberias tener aqui sino en el contexto */

  return (
    <>
      <div className="itemsInCart">
          {items.length /** Esto lo tienes que sustituir por el nuevo valor widget que traeras del contexto */}
      </div>
      <img src={cart} alt="cart" />
    </>
  );
};

export default CartWidget;
