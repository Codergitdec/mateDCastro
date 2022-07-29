import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { CartContext } from "../../context/useContext";
import { useContext } from "react";
const ItemDetail = ({ item }) => {
   const [add, setAdd] = useState(false)

    const { addItem } = useContext(CartContext)
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
          <div className="meta">Anadido!!</div>
          :

          <ItemCount item={item} stock={5} initial={1} addItem={addItem} />
      }
      </div>
      <Link to="/cart" className="ui bottom button green">
  
       Fin compra
      </Link>
      </div>
      </div>
      </div>
    
     )
    
};
export default ItemDetail;