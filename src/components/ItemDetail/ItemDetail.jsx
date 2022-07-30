import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { CartContext } from "../../context/useContext";
import { useContext } from "react";
const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false)
  const { addItem } = useContext(CartContext)

  function onAdd(/* los argumentos que vas a necesitar */) {
    /*
    Aqui debes escribir la logica para actualizar el estado de este componente
    El add lo vas a actualizar aqui dentro
    El addItem lo vas a ejecutar aqui dentro
    */
    setAdd(/*algo*/)
    addItem(/*algo*/)
  }
  

  return (
    
    <div style={{ with: "100%", textAlign: "center" }}>
      <div className="ui cards" style={{display: "inline-block"}}>
        <div className="card">
          <div className="image">
            <img src={item.pictureUrl} alt={item.title} />
          </div>
          <div className="content">
            <div className="header">${item.price}</div>
            <div className="meta">Categoria: {item.category}</div>
            <div className="description">Título: {item.title}</div>
          </div>

          <div className="extra content" style={{height: "auto"}}>
          {
              add ?
              <Link to="/cart" className="ui bottom button green">
                Fin compra
              </Link>
              /* Esto no es necesario <div className="meta">Anadido!!</div>, la idea es que aparezca el boton para ir al carrito a finalizar compra en sustitucion del ItemCount  */
              :
              <ItemCount item={item} stock={5} initial={1} addItem={onAdd} /> //La funcion que vas a pasar es onAdd
          }
          </div>
        </div>
      </div>
    </div>
  )
};
export default ItemDetail;