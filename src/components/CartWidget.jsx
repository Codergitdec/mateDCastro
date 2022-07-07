import cart from "./cart.svg";


const CartWidget = () => {
  
  const cuenta = 4;
  
  return (

<>
<img src={cart} alt="cart" />
{cuenta}
</>
  );
};

export default CartWidget;
