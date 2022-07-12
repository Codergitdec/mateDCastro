import React from 'react';
import { useState } from 'react';



const ItemCount = ({ initial = 0, stock = 5, onAdd }) => {
  
  const [count, setCount] = useState(initial);

  const addCount = (num) => {
    setCount(count + num);
  };

  return (
    <div className="count-container d-flex justify-content-center">
      <div className="count-container_contador">
        <button
          className="btn btn-secondary"
          onClick={() => addCount(-1)}
          disabled={count === initial ? true : null}
        >
          -
        </button>
        <span className="contador">   {count}   </span>
        <button
          className="btn btn-secondary"
          onClick={() => addCount(+1)}
          disabled={count === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-outline-secondary"
        onClick={() => onAdd(count)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;
