import React from 'react';
import { useState } from 'react';

      const ItemCount = ({ item, initial, stock, addItem }) => {
    const [count, setCount] = useState(initial);

    const sumacount = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    }
    const restacount = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    }

  return (
    <>
    <div className="ui three buttons">
      <div className="ui basic red button" onClick={restacount}>-</div>
      <div className="ui basic button">{count}</div>
      <div className="ui basic green button" onClick={sumacount}>+</div>
      </div>
      {
        count > 0 ?
        <div className="ui bottom attached button" onClick={() => addItem({item, count})}>
          <i className="cart icon"></i>
          Sumar al carrito
          </div>
          :
          <div className="ui bottom attached button disabled">
          <i className="cart icon"></i>
          Sumar al carrito
          </div>
      }
      </>
  )
    }

export default ItemCount;
