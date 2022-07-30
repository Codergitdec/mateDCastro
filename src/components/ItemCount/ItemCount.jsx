import React from 'react';
import { useState } from 'react';

      const ItemCount = ({ item, initial, stock, onAdd }) => {
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
      <div className= {count > 0 ? "ui bottom attached button" : "ui bottom attached button disabled"} onClick={() => onAdd(item, count)}> {/* Mira los cambios en la funcion */}
          <i className="cart icon" />
          Sumar al carrito
      </div>
    </>
  )
    }

export default ItemCount;
