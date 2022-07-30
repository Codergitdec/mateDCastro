import React, { useContext } from "react";
import { CartContext } from "../context/useContext";

const Cart = () => {
const { items } = useContext(CartContext);

return (
    <div>
    {
        items.map((item) => (
         <div key={item.id}>
            <h1>{item.name}</h1>
    </div>
))
}
</div>
)
}
export default Cart;